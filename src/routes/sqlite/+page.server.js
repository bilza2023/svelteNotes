
import {City} from "../../../dbSqlite/dbSqlite.js";

//////----
export async function load({fetch}) {
const cities = City.findAll();
    return {
      title: "The Title from load function",
      cities 
    };
}

//////----
export const actions = {
  default: async ({request}) => {
  const formData = await request.formData();
  console.log("formData",formData);
  return {success: true};
    // TODO log the user in
  }
};