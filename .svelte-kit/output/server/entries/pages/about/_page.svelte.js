import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1gogdsr_START -->${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-1gogdsr_END -->`, ""}

<h1>About Page</h1>`;
});
export {
  Page as default
};
