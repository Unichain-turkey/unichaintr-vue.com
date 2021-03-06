import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import Projects from '@/components/Projects'
import Admin from '@/components/sponsor/Admin'
import Demo from '@/components/sponsor/Demo'



Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        is_admin: true
      }
    },
    {
      path: '/whoIam',
      name: 'About',
      component: About
    },
    {
      path: '/knock-knock',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    { path: '*', redirect: '/hi' }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.is_admin)) {
    if(localStorage.getItem("isAdmin")=="true"){
      next()
    }
    else{
      next("/")
    }
  }
  else {
    next()
  }
});


export default router;

