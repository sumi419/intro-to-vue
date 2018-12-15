import Vue from 'vue'
import App from './App.vue'
import router from './router';


Vue.config.productionTip = false

new Vue({ router, render: (h) => h(App) }).$mount('#app');

// like index.js for react apps, main.js is where you would import the whole App 
// pass in router through here

