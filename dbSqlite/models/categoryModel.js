

export default function getCategory  (db,DataTypes) {

const Category = db.define('category', 
{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,

    },
  name : {
    type : DataTypes.STRING,
    allowNull : false,
    },
  description : {
   type : DataTypes.TEXT,
   allowNull : true,
  }
});
 
return Category;
}
//------------------------------
// module.exports = getCity;