import Vue from 'vue';
import Router from 'vue-router';
import Example from './components/Example.vue';
import Ex from './components/Ex.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ex',
      name: 'Ex',
      component: Ex
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ],
  mode: 'history'
})