import { c as create_ssr_component, d as each, e as escape } from './index-ca002110.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  console.log(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Testing Sqlite</h1>
<p>This data is being obtained in the self contained sqlite database</p>

<ul>${each(data.cities, (city) => {
    return `<li>${escape(city.id)} - $${escape(city.name)}</li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-271a1014.js.map
