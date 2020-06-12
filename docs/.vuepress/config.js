module.exports = {
  title: "Daily Book",
  description: "just a daily notesbook.",
  base: "/daily-notes/",
  head: [["link", { rel: "icon", href: "/zhouyi.png" }]],
  themeConfig: {
    logo: "/zhouyi.png",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "学习",
        items: [
          { text: "javascript", link: "/js/" },
          { text: "css", link: "/css/" },
          { text: "vue", link: "/vue/" },
          { text: "计算机网络", link: "/network/" },
          { text: "算法", link: "/algorithm/" },
          // { text: "前端调试", link: "/devTools/" },
          // { text: "git", link: "/git/" },
        ],
      },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://github.com/zy9852/daily-notes" },
    ],
    sidebar: [
      {
        title: "CSS基础",
        path: "/css/",
        children: ["/css/BFC", "/css/divCenter"],
      },
      {
        title: "JS基础",
        path: "/js/",
        children: ["/js/base", "/js/call", "/js/copy", "/js/if-else"],
      },
      {
        title: "VUE",
        path: "/vue/",
        children: ["/vue/base"],
      },
      {
        title: "网络基础",
        path: "/network/",
        children: ["/network/base", "/network/proxy"],
      },
      {
        title: "算法",
        path: "/algorithm/",
        children: ["/algorithm/unique", "/algorithm/flatten"],
      },
      {
        title: "开发记录",
        path: "/notes/",
        children: ["/notes/base"],
      },
    ],
    sidebarDepth: 1,
    lastUpdated: "最近更新",
  },
  markdown: {
    lineNumbers: true,
  },
};
