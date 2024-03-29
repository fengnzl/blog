# 发布订阅模式
## 观察者模式
本文除了代码实现，主要是参考[Observer vs Pub-Sub pattern](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c)

在说明发布订阅模式之前，我们先来了解下观察者模式

> 观察者模式是一种软件设计模式，其中有一个对象被观察者（Subject），维护了一个依赖它的集合观察者（Observes）, 被观察者中任意一个状态变化，都会自动的通知观察者，通常是调用一个统一的方法。

![observe.png](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fhn-images%2F1*s1kclXywIwae86iNa7cKZQ.png&w=1080&q=75)

观察者模式一种典型的应用场景就是响应式数据，如 Vue 的响应式。

## 代码实现

[相关参考文档](https://www.patterns.dev/posts/observer-pattern/)

```js
// observes 观察者数组，当特定事件发生将会被通知
// subscribe() 添加观察者到观察者数组
// unsubscribe() 从观察者数组中移除观察者
// notify() 特定事件发声通知观察者
class Observable {
  constructor() {
    this.observes = []
  }

  subscribe(fn) {
    this.observes.push(fn)
  }

  unsubscribe(fn) {
    this.observes = this.observes.filter(observe => observe != fn)
  }

  notify() {
    this.observes.forEach(fn => fn(...arguments))
  }
}

const observable = new Observable()
function logger(data) {
  console.log(`${Date.now()} ${data}`);
}
function logger2(data) {
  console.log(`${data}`);
}
observable.subscribe(logger)
observable.subscribe(logger2)
observable.notify('hello world')
// 1655910645933 hello world
// hello world

// 类似 vue3 响应式
let activeEffect
const targetMap = new WeakMap()
const track = (target, key) => {
  if (!activeEffect) return
  let depsForTarget = targetMap.get(target)
  if (!depsForTarget) {
    depsForTarget = new Map()
    targetMap.set(target, depsForTarget)
  }
  let deps = depsForTarget.get(key)
  if (!deps) {
    deps = new Set()
    depsForTarget.set(key, deps)
  }
  deps.add(activeEffect)
}

const trigger = (target, key) => {
  const depsForTarget = targetMap.get(target)
  if (!depsForTarget) return
  const deps = depsForTarget.get(key)
  if (!deps) return
  deps.forEach((effect) => effect());
}
const watchEffect = (effect) => {
  activeEffect = effect
  effect()
  activeEffect = null
}

const reactive = (obj) => {
  const handler = {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver)
      track(target, key)
      return value
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      if (result && oldValue !== value) {
        trigger(target, key)
      }
      return result
    }
  }
  return new Proxy(obj, handler)
}

const ref = raw => {
  const r =  {
    get value() {
      track(r, 'value')
      return raw
    },
    set value(newVal) {
      const oldVal = raw
      raw = newVal
      if (oldVal !== newVal) {
        trigger(r, "value");
      }
    }
  }
  return r
}

const b = ref(0);
watchEffect(() => console.log(b.value)); // 0
b.value = 3 // 3
b.value = 3

const pet = reactive({
  name: 'dog'
})
watchEffect(() => console.log(pet.name)) // dog
pet.name = 'cat' // cat
pet.name = 'cat' 
```

## 发布-订阅模式

> 在发布-订阅模式中，发布消息的被称作发布者（publishers）, 并不是直接将消息发送给特定的接收者（subscribers）。

**发布者和订阅者并不清楚对方的存在，而是通过第三方组件，可以称其为订阅中心（event bus，broker,ect）。来进行交流**
![pub-sub.png](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fhn-images%2F1*-GHFC93E4ODwNc98IE5_vA.gif&w=1080&q=75)
pub-sub 是一种用于在不同系统组件之间通信消息的模式,而这些组件对彼此的身份一无所知

总而言之，他们之间最主要的差别如下所示：

![difference](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fhn-images%2F1*NcicKEqwUaI8VEc-Ejk6Dg.jpeg&w=1080&q=75)

## 区别

- 发布订阅模式相较于观察者模式多了事件中心
- 观察者模式一般应用于单个应用内部，而发布订阅模式用于跨应用间，如通信等
- 发布订阅模式需要维护事件队列，订阅的事件越多，消耗内存越大
- 发布订阅模式中发布者和订阅者完全解耦，而观察者模式是松耦合模式
- 观察者模式大部分通过同步方式来实现，如发布者通过调用订阅者的相关方法来通知订阅者，而发布订阅模式则通常使用通过消息队列异步的方式来实现。

## 代码实现

```js
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(name, fn) {
    if (!isCallable(fn)) {
      throw new Error(`${fn} is not a function`);
    }
    const events = this.events.get(name);
    if (!events) {
      this.events.set(name, [fn]);
    } else {
      events.push(fn);
    }
  }

  emit() {
    const eventName = Array.prototype.shift.call(arguments);
    const fns = this.events.get(eventName);
    if (!fns || fns.length === 0) {
      return;
    }
    fns.forEach((fn) =>  fn(...arguments));
  }

  off(name, fn) {
    const fns = this.events.get(name);
    if (!fns) return
    if (!fn) {
      fns.length = 0;
    } else {
      const index = fns.findIndex((item) => item === fn);
      fns.splice(index, 1);
    }
  }

  once(name, fn) {
    const cb = () => {
      fn(...arguments);
      this.off(name, fn)
    };
    this.on(name, cb);
  }
}

function isCallable(argument) {
  return typeof argument === "function";
}

const em = new EventEmitter();
em.on('test', (name) => {
  console.log('test', name);
})

em.on("test", () => {
  console.log("test");
});

em.once('test', (name) => {
  console.log('test once', name)
})

em.emit('test', 'hello world');
// test hello world
// test
// test once test

em.emit("test", "hello");
// test hello
// test

em.on('test2', () => console.log('test2'))

em.emit('test2')
// test2
em.off('test2')

em.emit('test2')
```



