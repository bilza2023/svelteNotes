import { c as create_ssr_component, v as validate_component } from './index-13e04554.js';

const css$1 = {
  code: "nav.svelte-9uihpq{margin-top:10px;margin-left:10px}a.svelte-9uihpq{margin:2;padding:4px;color:white}",
  map: null
};
const MainNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"bg-gray-700 p-4 mt-0 ml-0 svelte-9uihpq"}"><a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/"}">Home</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/contact"}">Contact</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/about"}">About</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/chess"}">Chess</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/chess/44"}">ChessGame44</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/anim"}">Anim</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/anim/inner"}">Anim Inner</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/manage"}">Manage</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/formtest"}">formtest</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/sqlite"}">sqlite</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/articles"}">Articles</a>
<a class="${"bg-gray-800 text-white  svelte-9uihpq"}" href="${"/articles/create"}">Articles/create</a>

</nav>`;
});
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app bg-gray-800 svelte-8o1gnw"}">${validate_component(MainNav, "MainNav").$$render($$result, {}, {}, {})}


	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"bg-gray-700 svelte-8o1gnw"}"><p>visit <a href="${"/"}" class="${"svelte-8o1gnw"}">pichub.com</a> Created By Bilal Tariq</p></footer>
	
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-9cc9aa4c.js.map
