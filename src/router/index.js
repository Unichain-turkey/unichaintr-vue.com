import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import ProjectDetail from '@/components/ProjectDetail'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
