import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const user = JSON.parse(localStorage.getItem("account"));
//   if (requiresAuth && !user) {
//     next("/login");
//   } else {
//     const roles = to.meta.roles;
//     if (roles && roles.length > 0 && !roles.includes(user.role)) {
//       next("/");
//       init._toastr("error", "Bạn không có quyền truy cập!");
//     } else {
//       next();
//     }
//   }
// });

export default router
