import { createRouter, createWebHistory } from 'vue-router'
import Tutorials from '../components/TutorialsList'
import VeeMenue from '../components/validate/VeeMenue'
import V3_2 from '../components/validate/V3_2'
import V3_3 from '../components/validate/V3_3'
import V3_3_2 from '../components/validate/V3_3_2'
import V3_4 from '../components/validate/V3_4'
import V3_5 from '../components/validate/V3_5'
import V3_6 from '../components/validate/V3_6'
import V3_7 from '../components/validate/V3_7'
import V3_8 from '../components/validate/V3_8'
import V3_9 from '../components/validate/V3_9'
import V3_10 from '../components/validate/V3_10'
import V3_11 from '../components/validate/V3_11'
import V3_12 from '../components/validate/V3_12'
import V3_13 from '../components/validate/V3_13'
import V3_14 from '../components/validate/V3_14'
import V3_15 from '../components/validate/V3_15'
import V4_1 from '../components/validate/V4_1'
import V4_2 from '../components/validate/V4_2'
import V4_3 from '../components/validate/V4_3'
import V4_4 from '../components/validate/V4_4'
import V4_5 from '../components/validate/V4_5'
import V5_0 from '../components/validate/V5_0'
import V5_1 from '../components/validate/V5_1'
import V5_1_2 from '../components/validate/V5_1_2'
import V5_2 from '../components/validate/V5_2'

const routes = [
  {
    path: '/',
    name: 'tutorials',
    component: Tutorials
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '../components/AddTutorial')
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: () => import(/* webpackChunkName: "about" */ '../components/Tutorial')
  },
  {
    path: '/tutorials',
    name: 'tutorialList',
    component: () => import(/* webpackChunkName: "about" */ '../components/TutorialsList')
  },
  {path: '/veemenu',name: 'veemenu',component: VeeMenue},
  {path: '/v3_2',name: 'v3_2',component: V3_2},
  {path: '/v3_3',name: 'v3_3',component: V3_3},
  {path: '/v3_3_2',name: 'v3_3_2',component: V3_3_2},
  {path: '/v3_4',name: 'v3_4',component: V3_4},
  {path: '/v3_5',name: 'v3_5',component: V3_5},
  {path: '/v3_6',name: 'v3_6',component: V3_6},
  {path: '/v3_7',name: 'v3_7',component: V3_7},
  {path: '/v3_8',name: 'v3_8',component: V3_8},
  {path: '/v3_9',name: 'v3_9',component: V3_9},
  {path: '/v3_10',name: 'v3_10',component: V3_10},
  {path: '/v3_11',name: 'v3_11',component: V3_11},
  {path: '/v3_12',name: 'v3_12',component: V3_12},
  {path: '/v3_13',name: 'v3_13',component: V3_13},
  {path: '/v3_14',name: 'v3_14',component: V3_14},
  {path: '/v3_15',name: 'v3_15',component: V3_15},
  {path: '/v4_1',name: 'v4_1',component: V4_1},
  {path: '/v4_2',name: 'v4_2',component: V4_2},
  {path: '/v4_3',name: 'v4_3',component: V4_3},
  {path: '/v4_4',name: 'v4_4',component: V4_4},
  {path: '/v4_5',name: 'v4_5',component: V4_5},
  {path: '/v5_0',name: 'v5_0',component: V5_0},
  {path: '/v5_1',name: 'v5_1',component: V5_1},
  {path: '/v5_1_2',name: 'v5_1_2',component: V5_1_2},
  {path: '/v5_2',name: 'v5_2',component: V5_2},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
