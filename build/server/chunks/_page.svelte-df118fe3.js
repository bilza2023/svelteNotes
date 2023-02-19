import { c as create_ssr_component, e as escape } from './index-ca002110.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { gameId } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>game id forder</h1>
<h1>game id ${escape(gameId)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-df118fe3.js.map
