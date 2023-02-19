async function load({ fetch }) {
  const resp = await fetch("http://localhost:3000/api/get_cities");
  const cities = await resp.json();
  return {
    cities
  };
}
export {
  load
};
