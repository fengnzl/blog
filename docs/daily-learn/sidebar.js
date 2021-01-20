const dailyLearnSidebar = [
  {
    title: 'JavaScript',
    children: [
      'JavaScript/call-apply-bind-simulator',
      'JavaScript/commonModule-vs-ESM',
      'JavaScript/learn-closure',
      'JavaScript/learn-functional',
      'JavaScript/let-var-const',
    ]
  },
  {
    title: 'Vue',
    children: [
      'vue/',
      ['vue/ground-up/', 'From the Ground Up'],
      ['vue/sourcecode-analysis/prepare/', '2.X 源码学习'],
      'vue/componentChange'
    ]
  },
  {
    title: 'CSS',
    children: [
      'CSS/make-talkbubble',
      'CSS/content-ellipsis',
      'CSS/context-center',
    ]
  },
  {
    title: 'PHP',
    children: [
      'PHP/tp51-timestamp-autosave',
      'PHP/typedance-pay-mini',
      'PHP/tecent-SMS-verify',
      'PHP/restore-mysql-by-history',
      ['PHP/wx-tp-fullstack/first', '微信小程序商城构建全栈应用']
    ]
  },
  {
    title: 'Git',
    children: [
      'Git/git-des',
      'Git/git-time-machine',
    ]
  },
];

const vueGroundUpSidebar = [
  {
    title: 'From the Ground Up',
    children: [
      ['', 'Introduction'],
      'reactivity',
      'render-fun',
      'vuex-simulator',
      'vue-router-hash',
      'form-validate',
    ]
  },
];

const wxTpFullstackSidebar = [
  {
    title: '微信小程序商城构建全栈应用',
    children: [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
    ]
  },
];

const vueSourceCodeAnalysisSidebar = [
  {
    title: '准备工作',
    children: [
      ['prepare/', 'Introduction'],
      'prepare/flow',
      'prepare/rollup'
    ]
  },
];


module.exports = {
  dailyLearnSidebar,
  vueGroundUpSidebar,
  wxTpFullstackSidebar,
  vueSourceCodeAnalysisSidebar
}