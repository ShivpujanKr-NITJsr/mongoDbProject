const getDb=require('../util/database').getDb

class Product{
  constructor(title,price,description, imageUri){
    this.title=title;
    this.price=price;
    this.description=description;
    this.imageUri=imageUri;

  }

  save(){
    const db=getDb();
    return db.collection('products')
      .insertOne(this)
      .then(result=>{
        console.log(result)
      })
      .catch(err=>console.log(err))
  }

}

module.exports = Product;







// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Product;
