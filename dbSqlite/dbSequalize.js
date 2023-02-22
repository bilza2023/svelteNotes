import  {Sequelize,DataTypes} from 'sequelize';

// import {Database as sqlite} from "better-sqlite3";
// import sqlite from('sqlite3').verbose();

import path from  'path';
//-----------------------------------------------

import  getUser             from './models/userModel';
import  getRegion           from './models/regionModel.js';
import  getCity             from './models/citiesModel.js';
import  getBusiness         from './models/businessModel';
import  getBusinessType     from './models/businessTypeModel';
import  getArticle          from './models/articleModel';
import  getCategory          from './models/categoryModel';

////////////////////--database connection--////////////////////////
const db = new Sequelize({
    dialect: "sqlite",
    storage:  'fill4Sqlite.sqlite',
    logging: false,
});
// console.log("__dirname",path.join(__dirname, '..', 'fill4Sqlite.sqlite'));
////////////////////--user model--////////////////////////
const UserSeq = getUser( db , DataTypes);
const RegionSeq = getRegion( db , DataTypes);
const CitySeq = getCity( db , DataTypes);
const BusinessSeq = getBusiness( db , DataTypes);
const BusinessTypeSeq = getBusinessType( db , DataTypes);
const ArticleSeq = getArticle( db , DataTypes);
const CategorySeq = getCategory( db , DataTypes);


////////////////////////////////////////////////////
// const forcedFlag = true;

const forcedFlag = false;
db.sync({forced: forcedFlag})
.then((result) => {

    if (forcedFlag==true){
        console.log("sqlite setup complete WITH FORCED .");
    }else {
        console.log("sqlite==> setup complete.");
    }
})
.catch ( err => {

throw new Error( "sqlite failure",err);
});

 
//................
export {
db,
UserSeq,
CitySeq,
RegionSeq,
BusinessSeq,
BusinessTypeSeq,
ArticleSeq,
CategorySeq
}