import  {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/button',
        component: () => import('@/views/base/button.vue')
    },
    {
        path: '/container',
        component: () => import('@/views/base/container.vue')
    },
    {
        path: '/datepicker',
        component: () => import('@/views/form/date_picker.vue')
    },
    {
        path: '/fotm',
        component: () => import('@/views/form/form.vue')
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router