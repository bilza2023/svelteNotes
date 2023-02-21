const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-3dee46de.js","imports":["_app/immutable/start-3dee46de.js","_app/immutable/chunks/index-0316f0bc.js","_app/immutable/chunks/singletons-275da48e.js","_app/immutable/chunks/parse-d12b0d5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0b6c98eb.js'),
			() => import('./chunks/1-e5484244.js'),
			() => import('./chunks/2-bf0f6594.js'),
			() => import('./chunks/5-ba768eb5.js'),
			() => import('./chunks/6-d1b09143.js'),
			() => import('./chunks/7-c5ebc105.js'),
			() => import('./chunks/8-0db391e2.js'),
			() => import('./chunks/9-6113355b.js'),
			() => import('./chunks/10-c2715b15.js'),
			() => import('./chunks/11-ffdae64a.js'),
			() => import('./chunks/12-7e388da8.js'),
			() => import('./chunks/13-30688972.js'),
			() => import('./chunks/14-bee2168c.js'),
			() => import('./chunks/15-8c924bb7.js'),
			() => import('./chunks/16-1a39d6c2.js'),
			() => import('./chunks/17-c1a46022.js')
		],
		routes: [
			{
				id: "/anim",
				pattern: /^\/anim\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/anim/inner",
				pattern: /^\/anim\/inner\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/articles/create",
				pattern: /^\/articles\/create\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/articles/edit/[articleId]",
				pattern: /^\/articles\/edit\/([^/]+?)\/?$/,
				params: [{"name":"articleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/articles/[articleId]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"articleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/chess",
				pattern: /^\/chess\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/chess/[gameId]",
				pattern: /^\/chess\/([^/]+?)\/?$/,
				params: [{"name":"gameId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/formtest",
				pattern: /^\/formtest\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/manage",
				pattern: /^\/manage\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/sqlite",
				pattern: /^\/sqlite\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
