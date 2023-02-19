const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-aa09063e.js","imports":["_app/immutable/start-aa09063e.js","_app/immutable/chunks/index-0b5a1c33.js","_app/immutable/chunks/singletons-0cf6cf67.js","_app/immutable/chunks/parse-d12b0d5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-7ed8f8f5.js'),
			() => import('./chunks/1-b8a5b6c3.js'),
			() => import('./chunks/2-5f9ad795.js'),
			() => import('./chunks/5-2c42993c.js'),
			() => import('./chunks/6-f4a9d911.js'),
			() => import('./chunks/7-85feb434.js'),
			() => import('./chunks/8-19acdb1a.js'),
			() => import('./chunks/9-e96311d8.js'),
			() => import('./chunks/10-47cdcca3.js'),
			() => import('./chunks/11-a3740f58.js'),
			() => import('./chunks/12-022d4d39.js'),
			() => import('./chunks/13-3942ad8c.js'),
			() => import('./chunks/14-bdca8690.js'),
			() => import('./chunks/15-9a705102.js')
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
				id: "/chess",
				pattern: /^\/chess\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/chess/[gameId]",
				pattern: /^\/chess\/([^/]+?)\/?$/,
				params: [{"name":"gameId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/formtest",
				pattern: /^\/formtest\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/manage",
				pattern: /^\/manage\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sqlite",
				pattern: /^\/sqlite\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
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
