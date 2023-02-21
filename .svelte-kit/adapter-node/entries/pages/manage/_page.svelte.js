import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main><nav class="${"flex bg-brown-600 p-2 m-2"}"><button class="${"bg-green-700 text-white m-1 ml-2 mr-2 p-1 pl-2 pr-2 rounded-md "}">Show/Hide New Item</button></nav>

  ${``}
  ${``}

  <hr>

  <table class="${"bg-gray-800 text-white"}"><thead><tr><th class="${"px-4 py-2"}">id</th>
        <th class="${"px-4 py-2"}">name</th>
        <th class="${"px-4 py-2"}">edit</th>
        <th class="${"px-4 py-2"}">delete</th></tr></thead>
    <tbody>${each(data.cities, (item) => {
    return `<tr class="${"border-b border-gray-600"}"><td class="${"px-4 py-2"}">${escape(item.id)}</td>
          <td class="${"px-4 py-2"}">${escape(item.name)}</td>
          
          
          <td class="${"px-4 py-2"}"><button class="${"bg-blue-700 text-white m-1 ml-2 mr-2 p-1 pl-2 pr-2 rounded-md "}">Edit</button></td>
          
          <td class="${"px-4 py-2"}"><button class="${"bg-red-700 text-white m-1 ml-2 mr-2 p-1 pl-2 pr-2 rounded-md "}">Delete</button></td>

          
        </tr>`;
  })}</tbody></table></main>`;
});
export {
  Page as default
};
