import Layout from '@/layouts/Layout.vue'
import FootBall from '@/pages/FootBall.vue'
import Unavailable from "@/components/Unavailable.vue";

export default [
  {
    path: '/',
    redirect: '/football'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'football',
        component: FootBall,
      },
      {
        path: '*',
        component: Unavailable,
      },
    ]
  }
]
