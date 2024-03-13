import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const app = createApp(App);

app.use(store).use(router).use(VueCookies);


const check = app.mount('#app');

check.$options.created = function() {
  store.dispatch('checkCookies');
};
