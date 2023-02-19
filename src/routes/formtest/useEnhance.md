 = {  ({form})=>{
  //--runs before form submission
    // console.log("form",form);// console.log("data",data);// console.log("action",action);
    

  //--runs after form submission
        return async ({result,update})=>{
          // console.log("result",result);
              if (result.type=="success"){
                // update({data: {articles}});
                form.reset();
                update();
              }
        }; 
  }} 