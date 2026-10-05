import { createRouter, createWebHistory } from 'vue-router'
import VueBodyClass from 'vue-body-class';
import HomeView from '../views/HomeView.vue'

const title = '| Employee Portal'

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: `Welcome ${title}`,
				bodyClass: 'body--better_way',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					}
				]
			}
		},
		{
			path: '/growing-better',
			name: 'growing-better',
			component: () => import('../views/GrowingBetter.vue'),
			meta: {
				title: `Growing Better ${title}`,
				bodyClass: 'body--growing_better',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					},
					{
						name: 'Growing Better',
						path: '/growing-better'
					}
				]
			}
		},
		{
			path: '/growing-better/how-it-works',
			name: 'how-it-works',
			component: () => import('../views/growing-better/HowItWorksView.vue'),
			meta: {
				title: `How It Works ${title}`,
				bodyClass: 'body--growing_better',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					},
					{
						name: 'Growing Better',
						path: '/growing-better'
					},
					{
						name: 'How It Works',
						path: '/growing-better/how-it-works'
					}
				]
			}
		},
		{
			path: '/growing-better/nominate',
			name: 'nominate',
			component: () => import('../views/growing-better/NominateView.vue'),
			meta: {
				title: `Nominate ${title}`,
				bodyClass: 'body--growing_better',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					},
					{
						name: 'Growing Better',
						path: '/growing-better'
					},
					{
						name: 'Nominate',
						path: '/growing-better/nominate'
					}
				]
			}
		},
		{
			path: '/growing-better/interstitial',
			name: 'interstitial',
			component: () => import('../views/growing-better/InterstitialView.vue'),
			meta: {
				title: `Thank You for Nominating ${title}`,
				bodyClass: 'body--growing_better',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					},
					{
						name: 'Growing Better',
						path: '/growing-better'
					},
					{
						name: 'Nominate',
						path: '/growing-better/nominate'
					}
				]
			}
		},
		{
			path: '/growing-better/tree',
			name: 'tree',
			component: () => import('../views/growing-better/TreeView.vue'),
			meta: {
				title: `Tree ${title}`,
				bodyClass: 'body--growing_better body--tree',
				breadcrumb: [
					{
						name: 'Home',
						path: '/'
					},
					{
						name: 'Growing Better',
						path: '/growing-better'
					},
					{
						name: 'Tree',
						path: '/growing-better/tree'
					}
				]
			}
		},

	]
})

const vueBodyClass = new VueBodyClass(router.getRoutes());

router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if(nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if(previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Skip rendering meta tags if there are none.
	if(!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags.map(tagDef => {
		const tag = document.createElement('meta');

		Object.keys(tagDef).forEach(key => {
			tag.setAttribute(key, tagDef[key]);
		});

		// We use this to track which meta tags we create so we don't interfere with other ones.
		tag.setAttribute('data-vue-router-controlled', '');

		return tag;
	})
	// Add the meta tags to the document head.
	.forEach(tag => document.head.appendChild(tag));

	next()
})

export default router