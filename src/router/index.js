import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '@/views/Login.vue'
import Contact from '@/views/Contact.vue'
import Login_success from '@/views/Login_success.vue'
import Contact_success from '@/views/Contact_success.vue'
import Officers from '../assets/officers_contact.json'
// import flag_med from '../images3-flags-large.jpg'
// import Flag_large from '../images/3-flags-large.jpg'
import LoginButton from '@/components/LoginButton.vue'
import LogoutButton from '@/components/LogoutButton.vue'
import Profile from '@/components/UserProfile.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
    { path: '/login_success', component: Login_success },
    { path: '/contact_success', component: Contact_success },
    { path: '/officers', component: Officers },
    // { path: '/flag_med', component: flag_med },
    // { path: '/flag_large', component: Flag_large }
    { path: '/loginbutton', component: LoginButton },
    { path: '/logoutbutton', component: LogoutButton },
    { path: '/profile', component: Profile },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router