import { c as create_ssr_component, h as add_attribute, e as escape, f as each } from "../../../chunks/index.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  console.log(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"bg-gray-800 w-full"}"><form class="${"w-3/5 bg-gray-500 p-4 rounded-lg mx-auto mt-2"}" method="${"POST"}" action="${"?/create"}"><div class="${"p-4"}"><label class="${"block font-bold mb-2"}" for="${"title"}">Title:
      </label>
      <input class="${"w-full p-2 rounded-md border-gray-400"}" type="${"text"}" id="${"title"}" name="${"title"}"${add_attribute("value", form?.title ?? "", 0)}>
      ${form?.errorMsg !== null ? `<div class="${"bg-red-800 text-white p-2 m-2 border-2"}">Title is too short</div>` : ``}</div>
    <div class="${"p-4"}"><label class="${"block font-bold mb-2"}" for="${"lastName"}">Content:
      </label>
      <textarea class="${"w-full p-2 rounded-md border-gray-400"}" type="${"text"}" id="${"content"}" name="${"content"}" rows="${"2"}">${escape(form?.content ?? "", true)}</textarea>
        </div>
    <button class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto my-4 block"}">Add Article
    </button></form>


<br>
<hr>
<br>

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
  })}</table></div>`;
});
export {
  Page as default
};
