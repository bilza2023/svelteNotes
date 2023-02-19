import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>This is anim layout header</h1>








${slots.default ? slots.default({}) : ``}




<h1>This is anim  layout footer</h1>`;
});
export {
  Layout as default
};
