import { c as create_ssr_component, e as escape, d as each } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Chess Page</h1>

<h1>${escape(data.title)}</h1>


<ul>${each(data.products, (product) => {
    return `<li>${escape(product.title)} - $${escape(product.price)}</li>`;
  })}</ul>`;
});
export {
  Page as default
};
