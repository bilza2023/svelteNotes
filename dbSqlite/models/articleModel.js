
export default  function getArticle   (db,DataTypes) {
const Article = db.define('article', 
  {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,

    },
    title : {
    type : DataTypes.STRING,
    allowNull : false,
    },
  content : {
   type : DataTypes.TEXT,
   allowNull : false,
  }

});
 
return Article;
}
//------------------------------