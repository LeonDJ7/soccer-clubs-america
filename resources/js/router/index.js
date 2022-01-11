import { createWebHistory, createRouter } from "vue-router";
import Home from '../../views/Home'
import ClubDetails from '../../views/ClubDetails'
import ClubMap from '../../views/ClubMap'

const routes = [
    { path: '/', component: Home },
    { path: '/club-details', component: ClubDetails },
    { path: '/club-map', component: ClubMap },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;