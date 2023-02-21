import { c as create_ssr_component } from "../../../../chunks/index.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-white text-2x "}">New Article</h1>

<form class="${"mx-auto w-full px-4 py-2 border rounded-lg"}" method="${"POST"}" action="${"?/create"}"><label for="${"article-title"}" class="${"text-white block font-medium text-gray-700 mb-1"}">Title:</label>

  <input type="${"text"}" name="${"title"}" class="${"px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"}" placeholder="${"Title..."}">

  <label for="${" article-content"}" class="${"text-white block font-medium text-gray-700 my-4"}">Content:</label>
  <textarea id="${"article-content"}" name="${"content"}" rows="${"8"}" class="${"px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full text-lg"}">
${"\r\n  "}</textarea>

  <button class="${"w-full bg-green-700 text-lg text-white p-3 mt-5 mb-5"}">Save</button></form>

<br>
<br>
<br>`;
});
export {
  Page as default
};
