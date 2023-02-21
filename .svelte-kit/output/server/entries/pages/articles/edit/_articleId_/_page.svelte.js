import { c as create_ssr_component, h as add_attribute, e as escape } from "../../../../../chunks/index.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const article = data.article;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="${"text-white text-2x "}">Edit</h1>

<form class="${"mx-auto w-full px-4 py-2 border rounded-lg"}" method="${"POST"}" action="${"?/update"}"><label for="${"article-title"}" class="${"text-white block font-medium text-gray-700 mb-1"}">Title:</label>

  <input type="${"hidden"}" hidden name="${"id"}"${add_attribute("value", article.id, 0)}> 

  <input type="${"text"}" name="${"title"}" class="${"px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"}"${add_attribute("value", article.title, 0)}>

  <label for="${" article-content"}" class="${"text-white block font-medium text-gray-700 my-4"}">Content:</label>
  <textarea name="${"content"}" rows="${"8"}" class="${"px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full text-lg"}">${"  " + escape(article.content, true) + "\r\n  "}</textarea>

<button class="${"w-full bg-green-700 text-lg text-white p-3 mt-5 mb-5"}">Save</button></form>

<br>
<br>
<br>`;
});
export {
  Page as default
};
