const routes = [
  {
    path: '/',
    component: () => import('@/layout/_default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {},
        component: () => import('@/pages/Home')
      },
      {
        path: 'product',
        name: 'product-list',
        meta: {},
        component: () => import('@/pages/Product')
      },
      {
        path: 'login',
        name: 'sign-in',
        meta: {},
        component: () => import('@/pages/Auth/SignIn.vue')
      },
      {
        path: 'register',
        name: 'sign-up',
        meta: {},
        component: () => import('@/pages/Auth/signUp.vue')
      }
    ]
  },
  {
    path: '/ad/',
    component: () => import('@/layout/_ad.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        meta: {},
        component: () => import('@/pages/System/Dashboard')
      },
      {
        path: 'product/new',
        name: 'Create',
        meta: {},
        component: () => import('@/pages/System/Product/Create.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/pages/NotFound.vue')
  }
]

export default routes
