import { c as create_ssr_component, e as escape, f as each } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Chess Page</h1>

<h1>${escape(data.title)}</h1>


<ul>${each(data.cities, (city) => {
    return `<li>${escape(city.id)} - $${escape(city.name)}</li>`;
  })}</ul>`;
});
export {
  Page as default
};
