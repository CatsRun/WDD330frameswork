import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
// Vue.config.productionTip = false;

// Import the official Auth0 plugin
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(router);

// Install Auth0 plugin
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin,
        onRedirectCallback: (appState) => {
            router.push(
                appState?.targetUrl || window.location.pathname
            );
        },
    })
);

app.mount('#app');