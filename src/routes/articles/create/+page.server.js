

const articles = [
  {id : 1, title:"Bill", content:"These are the content :1"  },
  {id : 2, title:"Kill", content:"These are the content :2"  },
  {id : 3, title:"Mike", content:"These are the content :3"  }

];


export async function load({fetch}) {

    return { articles };
}