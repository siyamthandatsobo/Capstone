import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';

// Set the default expiration time for cookies
VueCookies.config('7d');

createApp(App).use(store).use(router).use(VueCookies).mount('#app');

