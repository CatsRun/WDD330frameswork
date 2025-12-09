import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '@/views/Login.vue'
import Contact from '@/views/Contact.vue'
import Contact_success from '@/views/contact_success.vue'
import Login_success from '@/views/Login_success.vue'
// import assets from '@/assets/officers_contact.json'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
    { path: '/contact_success', component: Contact_success },
    { path: '/login_success', component: Login_success }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router