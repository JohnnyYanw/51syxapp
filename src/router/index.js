import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
let routes = [
	{
		path: '/',
		redirect: 'home'
	}, {
		path: '/medium',
		component: resolve => require(['components/Medium'], resolve),
		children: [
			// .vue with Footer
			{
				path: '/home',
				component: resolve => require(['components/home/Home'], resolve)
			}, {
				path: '/find',
				component: resolve => require(['components/find/Find'], resolve)
			}, {
				path: '/help',
				component: resolve => require(['components/help/Help'], resolve),
				children: [
					{
						path: '/',
						redirect: 'bus'
					}, {
						path: 'bus',
						component: resolve => require(['components/help/template/Aboutbus'], resolve)
					}, {
						path: 'tourcar',
						component: resolve => require(['components/help/template/Abouttourcar'], resolve)
					}, {
						path: 'train',
						component: resolve => require(['components/help/template/Abouttrain'], resolve)
					}
				]
			}, {
				path: '/user',
				component: resolve => require(['components/user/User'], resolve)
			}
		]
	}, {
		path: '/login',
		component: resolve => require(['components/user/Login'], resolve)
	}, {
		path: '/register',
		component: resolve => require(['components/user/Register'], resolve)
	}, {
		path: '/passenger',
		component: resolve => require(['components/user/Passenger'], resolve)
	}, {
		path: '/allorders',
		component: resolve => require(['components/user/Orders'], resolve)
	}, {
		path: '/set',
		component: resolve => require(['components/user/Set'], resolve)
	}, {
		path: '/tourcar',
		component: resolve => require(['components/tourcar/Tourcar'], resolve),
		children: [
			{
				path: '/',
				component: resolve => require(['components/tourcar/index/Index'], resolve)
			}, {
				path: 'list',
				component: resolve => require(['components/tourcar/list/List'], resolve)
			}, {
				path: 'detail',
				component: resolve => require(['components/tourcar/detail/Detail'], resolve)
			}, {
				path: 'order',
				component: resolve => require(['components/tourcar/order/Order'], resolve)
			}
		]
	}, {
		path: '/bus',
		component: resolve => require(['components/bus/Bus'], resolve),
		children: [
			{
				path: '/',
				component: resolve => require(['components/bus/index/Index'], resolve)
			}, {
				path: 'list',
				component: resolve => require(['components/bus/list/List'], resolve)
			}, {
				path: 'order',
				component: resolve => require(['components/bus/order/Order'], resolve)
			}
		]
	}, {
		path: '/scenery',
		component: resolve => require(['components/scenery/Scenery'], resolve)
	}, {
		path: '/hotel',
		component: resolve => require(['components/hotel/Hotel'], resolve)
	}, {
		path: '/train',
		component: resolve => require(['components/train/Train'], resolve)
	}, {
		path: '/hotelcar',
		component: resolve => require(['components/hotelcar/Hotelcar'], resolve)
	}
];

export default new Router({
	base: __dirname,
	linkActiveClass: 'on',
	saveScrollPosition: false,
	mode: 'history',
	routes
});
