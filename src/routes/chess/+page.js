
import { error } from '@sveltejs/kit';

export async function load({fetch}) {

// const resp = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
const resp = await fetch('http://localhost:3000/api/get_cities');

const cities = await resp.json();
// console.log(cities);
// const resp = await fetch('https://dummyjson.com/test', {
//         method: 'GET', /* or POST/PUT/PATCH/DELETE */});
// const data = await resp.json();

    return {
      title: "The Title from load function",
      cities 
    };

}