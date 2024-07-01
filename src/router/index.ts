import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/HomeView.vue')
    },
    {
      path: '/work/ddgr',
      name: 'Dungeon Defenders: Going Rogue',
      component: () => import('@work/DDGR.vue')
    },
    {
      path: '/work/unmasked',
      name: 'Unmasked',
      component: () => import('@work/UnmaskedView.vue')
    },
    {
      path: '/work/hush',
      name: 'Hush',
      component: () => import('@work/HushView.vue')
    },
    {
      path: '/work/giantwalkthroughmouth',
      name: 'Giant Walkthrough Mouth',
      component: () => import('@work/GiantWalkthroughMouth.vue')
    },
    {
      path: '/work/dentalab',
      name: 'DentaLab',
      component: () => import('@work/DentaLab.vue')
    },
    {
      path: '/work/ustaa',
      name: 'USTAA',
      component: () => import('@work/USTAA.vue')
    },
    {
      path: '/work/lfg',
      name: 'LFG',
      component: () => import('@work/LFG.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@views/AboutView.vue')
    }
  ]
})

export default router
