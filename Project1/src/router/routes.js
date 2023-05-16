
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
      { path: '/home', component: () => import('pages/home.vue') },
      { path: '/loginpage', component: () => import('pages/loginpage.vue') },
      { path: '/content', component: () => import('pages/content.vue') },
      { path: '/details', component: () => import('pages/details.vue') },
      { path: '/plans', component: () => import('pages/plans.vue') },
      { path: '/computed', component: () => import('pages/drafts.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
