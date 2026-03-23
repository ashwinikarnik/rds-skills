import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AllDemosPage from './pages/AllDemosPage.vue';
import ButtonDemoPage from './pages/demos/ButtonDemoPage.vue';
import ButtonPlayApolloDemoPage from './pages/demos/ButtonPlayApolloDemoPage.vue';
import ButtonPlayApolloSkillTestPage from './pages/demos/ButtonPlayApolloSkillTestPage.vue';
import FormCheckboxDemoPage from './pages/demos/FormCheckboxDemoPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/demos', name: 'demos', component: AllDemosPage },
  { path: '/demos/button', name: 'button-demo', component: ButtonDemoPage },
  {
    path: '/demos/button-play-apollo',
    name: 'button-play-apollo-demo',
    component: ButtonPlayApolloDemoPage
  },
  {
    path: '/demos/button-play-apollo-skill-test',
    name: 'button-play-apollo-skill-test',
    component: ButtonPlayApolloSkillTestPage
  },
  {
    path: '/demos/form-checkbox',
    name: 'form-checkbox-demo',
    component: FormCheckboxDemoPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
