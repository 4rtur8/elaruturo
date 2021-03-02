export default [
  {
    path: "/razonamiento/razo/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/writing-content/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/sidebar/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/settings/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/algebra/numerosreales/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/installation/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/deploying/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/home/arturo/git/arturo/elaruturo/src/templates/MarkdownPage.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/arturo/git/arturo/elaruturo/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/arturo/git/arturo/elaruturo/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/arturo/git/arturo/elaruturo/src/pages/404.vue")
  }
]

