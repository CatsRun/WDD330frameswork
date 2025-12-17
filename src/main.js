import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// import assets from './assets/officers_contact.json'


createApp(App).use(router).mount('#app')


// **************
// code from https://auth0.com/blog/beginner-vuejs-tutorial-with-user-login/#Adding-Authentication-to-your-Vue-App



// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: (appState) => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname,
        );
    },
});

Vue.config.productionTip = false;