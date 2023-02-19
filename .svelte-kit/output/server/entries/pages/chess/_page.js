async function load({ fetch }) {
  const resp = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price");
  const data = await resp.json();
  console.log(data);
  return {
    title: "The Title from load function",
    products: data.products
  };
}
export {
  load
};
