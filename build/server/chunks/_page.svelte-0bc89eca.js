import { c as create_ssr_component, h as each, e as escape } from './index-13e04554.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  console.log(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1 class="${"text-yellow-200"}">Testing Sqlite</h1>
<p class="${"text-yellow-200"}">This data is being obtained in the self contained sqlite database</p>

<ul>${each(data.cities, (city) => {
    return `<li class="${"text-yellow-200"}">${escape(city.id)} ==== ${escape(city.name)}</li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0bc89eca.js.map
