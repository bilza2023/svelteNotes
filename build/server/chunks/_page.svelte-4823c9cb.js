import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as createEventDispatcher, h as each } from './index-13e04554.js';
import 'devalue';

const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { articles } = $$props;
  createEventDispatcher();
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  return `<table class="${"mx-auto w-full mb-10"}"><tr class="${"text-white p-5 bg-blue-900"}"><td class="${"p-2 m-2 border-2 "}">id</td>
<td class="${"p-2 m-2 border-2 "}">Title</td>
<td class="${"p-2 m-2 border-2 "}"></td>
<td class="${"p-2 m-2 border-2 "}"></td>
<td class="${"p-2 m-2 border-2 "}"></td></tr> 

${each(articles, (article) => {
    return `<tr class="${"text-white p-5"}"><td class="${"p-2 m-2 border-2 "}">${escape(article.id)}</td>
<td class="${"p-2 m-2 border-2 "}">${escape(article.title)}</td> 

<td class="${"p-2 m-2 border-2 bg-blue-800"}"><a class="${"text-white"}"${add_attribute("href", `http://localhost/articles/${article.id}`, 0)}>View</a></td> 


<td class="${"p-2 m-2 border-2 bg-red-400"}"><a class="${"text-white"}"${add_attribute("href", `http://localhost/articles/edit/${article.id}`, 0)}>Edit</a></td> 


<td class="${"p-2 m-2 border-2 bg-red-900"}"><form method="${"post"}" action="${"?/delete"}"><input name="${"id"}" type="${"hidden"}" hidden${add_attribute("value", article.id, 0)}>
<button class="${"text-white"}">Delete</button>
</form></td> 


</tr>`;
  })}</table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let articles = data.articles;
  let searchText = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="${"text-white"}">Articles</h1>


<div class="${"bg-blue-600 flex justify-center items-center py-2"}">
<input name="${"searchText"}" class="${"px-2 py-1 border rounded-l"}" type="${"text"}"${add_attribute("value", searchText, 0)}>

${``}


<button class="${"px-4 py-1 bg-blue-800 text-white rounded-r"}">Search</button>

<div class="${"bg-blue-800 text-white text-xl p-1 m-1"}">Found : ${escape(articles.length)}</div></div>
<hr>






${validate_component(Table, "Table").$$render($$result, { articles }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4823c9cb.js.map
