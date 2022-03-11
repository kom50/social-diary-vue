import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useStore } from '@/store/store'

function checkAuth(to, from, next) {
  const store = useStore()
  console.log('before enter ', to, from, store)
  if (store.isLoggedIn)
    next()
  else
    next({ path: '/signin' })
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: checkAuth
  },
  {
    path: '/signup',
    name: 'signUp',
    component: () => import('../views/SignUpView.vue'),
    beforeEnter: (to, from, next) => {
      const store = useStore()
      if (store.isLoggedIn)
        next('/')
      else
        next()
    }
  },
  {
    path: '/signin',
    name: 'signIn',
    component: () => import('../views/SignInView.vue'),
    beforeEnter: (to, from, next) => {
      const store = useStore()
      if (store.isLoggedIn)
        next('/')
      else
        next()
    }
  },
  {
    path: '/postview',
    name: 'postView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostsView.vue'),
    beforeEnter: checkAuth

  },
  {
    path: '/createpost',
    name: 'createPost',
    component: () => import('../views/CreatePostView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/myposts',
    name: 'myPosts',
    component: () => import('../views/MyPostsView.vue'),
    beforeEnter: checkAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
