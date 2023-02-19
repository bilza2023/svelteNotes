import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './index-ca002110.js';
import 'devalue';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  console.log(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1 class="${"text-white"}">Articles</h1>


<table class="${"mx-auto w-3/5 mb-10"}"><tr class="${"text-white p-5 bg-green-900"}"><td class="${"p-2 m-2 border-2 "}">id</td>
<td class="${"p-2 m-2 border-2 "}">Title</td>
<td class="${"p-2 m-2 border-2 "}">Content</td>
<td class="${"p-2 m-2 border-2 "}"></td>
<td class="${"p-2 m-2 border-2 "}"></td></tr>

${each(data.articles, (article) => {
    return `<tr class="${"text-white p-5"}"><td class="${"p-2 m-2 border-2 "}">${escape(article.id)}</td>
<td class="${"p-2 m-2 border-2 "}">${escape(article.title)}</td> 
<td class="${"p-2 m-2 border-2 "}">${escape(article.content)}</td> 
<td class="${"p-2 m-2 border-2 bg-green-700"}">Edit</td> 
<td class="${"p-2 m-2 border-2 bg-red-800"}"><form method="${"post"}" action="${"?/delete"}"><input name="${"id"}" type="${"hidden"}" hidden${add_attribute("value", article.id, 0)}>
<button>Delete</button>
</form></td> 

</tr>`;
  })}</table>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9e760c81.js.map
