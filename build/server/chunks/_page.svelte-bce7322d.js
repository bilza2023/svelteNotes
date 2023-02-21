import { c as create_ssr_component, e as escape, h as each } from './index-13e04554.js';

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

export { Page as default };
//# sourceMappingURL=_page.svelte-bce7322d.js.map
