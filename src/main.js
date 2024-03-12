import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const app = createApp(App);

// Set up the app instance
app.use(store).use(router).use(VueCookies);

// Mount the app
const vm = app.mount('#app');

// Dispatch the checkCookies action in the created hook
vm.$options.created = function() {
  store.dispatch('checkCookies');
};
