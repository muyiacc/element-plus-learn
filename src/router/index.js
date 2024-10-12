import  {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/button',
        component: () => import('@/views/button.vue')
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router