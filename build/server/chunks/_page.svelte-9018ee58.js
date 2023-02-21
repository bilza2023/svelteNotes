import { c as create_ssr_component, v as validate_component, e as escape } from './index-13e04554.js';

const css = {
  code: "h1.svelte-6v6ret{border:1px solid gray;padding:4px;margin:4px;background-color:darkblue;color:white;box-shadow:inset}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "Insert Content..." } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  return `<h1 class="${"svelte-6v6ret"}">${escape(content)}</h1>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Anim Folder</h1>
${validate_component(Title, "Title").$$render($$result, { content: "The Inserted Content" }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9018ee58.js.map
