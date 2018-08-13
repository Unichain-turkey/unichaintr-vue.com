import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import ProjectDetail from '@/components/ProjectDetail'
import Projects from '@/components/Projects'
import Admin from '@/components/sponsor/Admin'
import store from '@/store/'


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
      path: '/project/:name',
      name: 'ProjectDetail',
      component: ProjectDetail
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

    next()

  }
  else {
    next()
  }
});


export default router;

