import '@rds-vue-ui/rds-theme-base/dist/css/rds-theme-base.css';
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
