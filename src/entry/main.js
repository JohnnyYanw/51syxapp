// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'common.css';
import App from 'components/App';
import router from 'router';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
