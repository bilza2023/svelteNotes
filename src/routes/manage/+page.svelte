<script>
import axios from "axios";
let idToEdit = null;
let nameToEdit = null;

let newItemName = "";
let showEditDialog = false;
let showNewDialog = false;
export let data;

async function refresh(){
try{

const r = await axios.get('http://localhost:3000/api/get_cities');
data.cities = await r.data;    
}
catch(error){
alter("Error",error);
}
}


async function addNewItem ( )  {
  try {
    const resp = await axios.post('http://localhost:3000/city/new',{name:newItemName});

    if ( resp.data.success==true){
       refresh();
    }else {
    throw new Exception("failed to create new item");
    }
    // clear the new item input
        newItemName = "";
    return;
  } catch (error) {
    alert("failed to add new item");
  }
}



const editHandler = async (id,name) => {
showEditDialog = true;
  idToEdit = id;
  nameToEdit = name;
  console.log(id,name);
};

const editAction = async () => {
  try {
  const newName = document.getElementById("editItemName").value;
  document.getElementById("editItemName").value="";
    const response = await axios.post(`http://localhost:3000/city/edit`,{cityIdToEdit : idToEdit , cityEditName : newName});
    const success = response.data.success;
      if (success == true){
        refresh( );
      }else{
        alert(response.data.message);
      }
  } catch (error) {
    console.error(error);
  }
};
const deleteHandler = async (idToDelete) => {
  try {
    const response = await axios.post(`http://localhost:3000/city/delete`,{idToDelete});
    const success = response.data.success;
      if (success !== true){
      alert(response.data.message);
      return;
      }else{
      refresh();
      }
  } catch (error) {
    console.error(error);
  }
};
</script>

<main>
  <nav class="flex bg-brown-600 p-2 m-2">
    <button class="bg-green-700 text-white  m-1  ml-2 mr-2 p-1  pl-2 pr-2  rounded-md " on:click={()=> showNewDialog = !showNewDialog }>Show/Hide New Item</button>
  </nav>

  {#if showNewDialog}
    <div>
      <input bind:value={newItemName} type="text" class="bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md py-2 px-4">

      <button class="bg-green-700 text-white  m-1  ml-2 mr-2 p-1  pl-2 pr-2  rounded-md" on:click={addNewItem}>Add New Item</button>
    </div>
  {/if}
  {#if showEditDialog}
    <div>
      <input type="hidden" value={idToEdit} id="idToEdit">
      <input type="text" value={nameToEdit} id="editItemName">
      <button on:click={editAction}>Edit Item</button>
    </div>
  {/if}

  <hr/>

  <table class="bg-gray-800 text-white">
    <thead>
      <tr>
        <th class="px-4 py-2">id</th>
        <th class="px-4 py-2">name</th>
        <th class="px-4 py-2">edit</th>
        <th class="px-4 py-2">delete</th>
      </tr>
    </thead>
    <tbody>
      {#each data.cities as item}
        <tr class="border-b border-gray-600">
          <td class="px-4 py-2">{item.id}</td>
          <td class="px-4 py-2">{item.name}</td>
          <!-- <td class="px-4 py-2"> -->
          <!-- <button on:click|preventDefault={() => editHandler( item.id,item.name)}>edit</button> -->
          <td class="px-4 py-2">
          <button class="bg-blue-700 text-white  m-1  ml-2 mr-2 p-1  pl-2 pr-2  rounded-md ">Edit</button>
          </td>
          
          <td class=" px-4 py-2">
          <button class="bg-red-700 text-white  m-1  ml-2 mr-2 p-1  pl-2 pr-2  rounded-md " on:click|preventDefault={( )=> {deleteHandler(item.id)}}>Delete</button>
          </td>

          
        </tr>
      {/each}
    </tbody>
  </table>
</main>
