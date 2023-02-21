import { c as create_ssr_component, e as escape } from './index-13e04554.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { article } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"text-white"}"><h1>${escape(article.title)}</h1>

<div>${escape(article.content)}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8bffc756.js.map
