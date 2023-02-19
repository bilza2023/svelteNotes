import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1chmqk9.svelte-1chmqk9{margin-top:10px;margin-left:10px}a.svelte-1chmqk9.svelte-1chmqk9{border:1px solid silver;margin:2;padding:4px;background-color:darkblue;color:white}.app.svelte-1chmqk9.svelte-1chmqk9{display:flex;flex-direction:column;min-height:100vh}main.svelte-1chmqk9.svelte-1chmqk9{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1chmqk9.svelte-1chmqk9{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-1chmqk9 a.svelte-1chmqk9{font-weight:bold}@media(min-width: 480px){footer.svelte-1chmqk9.svelte-1chmqk9{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1chmqk9"}">

<nav class="${"svelte-1chmqk9"}"><a href="${"/"}" class="${"svelte-1chmqk9"}">Home</a>
<a href="${"/contact"}" class="${"svelte-1chmqk9"}">Contact</a>
<a href="${"/about"}" class="${"svelte-1chmqk9"}">About</a>
<a href="${"/chess"}" class="${"svelte-1chmqk9"}">Chess</a>
<a href="${"/chess/44"}" class="${"svelte-1chmqk9"}">ChessGame44</a>
<a href="${"/anim"}" class="${"svelte-1chmqk9"}">Anim</a>
<a href="${"/anim/inner"}" class="${"svelte-1chmqk9"}">Anim Inner</a></nav>


	<main class="${"svelte-1chmqk9"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-1chmqk9"}"><p>visit <a href="${"/"}" class="${"svelte-1chmqk9"}">pichub.com</a> Created By Bilal Tariq</p></footer>
</div>`;
});
export {
  Layout as default
};
