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
