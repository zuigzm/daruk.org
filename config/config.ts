export default {
  // 站点模式
  mode: "site",
  favicon: "/images/logo.png",
  logo: "/images/logo.png",
  title: "Daruk",
  menus: {
    "/tutorial": [
      {
        title: "新手指南",
        children: [
          "tutorial/about",
          "tutorial/install",
          "tutorial/different",
          "tutorial/scaffolding",
          "tutorial/quick-start",
        ],
      },
      {
        title: "基础功能",
        children: [
          "tutorial/specification",
          "tutorial/daruk-config",
          "tutorial/lifecycle",
          "tutorial/decorator",
          "tutorial/controller",
          "tutorial/middleware",
          "tutorial/service",
          "tutorial/timer",
          "tutorial/util",
          "tutorial/culster",
          "tutorial/pm2",
          "tutorial/logger",
          "tutorial/performance",
          "tutorial/extension",
        ],
      },
    ],
  },
  navs: [
    {
      title: "指南",
      path: "/tutorial",
    },
    {
      title: "API",
      path: "/api",
    },
    {
      title: "框架",
      path: "/principle",
    },
    {
      title: "GitHub",
      path: "https://github.com/darukjs/daruk",
    },
    {
      title: "更新日志",
      path: "https://github.com/darukjs/daruk/releases",
    },
  ],
};
