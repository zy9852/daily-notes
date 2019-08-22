module.exports = {
  title: 'Daily Book',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习',
        items: [
          { text: 'javascript', link: '/javascript/' },
          { text: 'css', link: '/css/' },
          { text: 'vue', link: '/vue/' },
          { text: '前端调试', link: '/devTools/' },
          { text: 'git', link: '/git/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/zy9852/daily-notes' }
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  }
};
