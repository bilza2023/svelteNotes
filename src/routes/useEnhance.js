import { goto } from '$app/navigation';


use:enhance={ async ({ form, data, action, cancel }) => {
 const id = data.get("id");
 console.log(id);
 dispatch("delarticle" , {id});
//   const filteredArticles = articles.filter(article => article.id !== id);
//   articles = [...filteredArticles];
    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission

    return async ({ result, update }) => {
    await goto('http://localhost');
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
    };
  }}