export default [
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: '/dashboard/work',
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "work",
        name: "dashboard-work",
        component: () => import("../views/dashboard/index.vue"),
        meta: {
          title: "工作台",
        },
      },
    ]
  },
  {
    path: "/form",
    name: "form",
    meta: {
      title: "表单",
    },
    redirect: '/form/design',
    children: [
      {
        path: "design",
        name: "form-design",
        component: () => import("../views/form/index.vue"),
        meta: {
          title: "表单设计",
        },
      },
      {
        path: "example",
        name: "form-example",
        component: () => import("../views/form/example.vue"),
        meta: {
          title: "表单展示",
        },
      },
    ],
  },
];
