
const mongodb=require('mongodb')

const Mongoclient=mongodb.MongoClient;

const MongoConnect=(cb)=>{
  Mongoclient.connect(process.env.mongolink)
    .then(client=>{

      console.log('Connected')
      _Db=client.db()


      cb()
    }).catch(err=>{
      console.log(err)
      throw err;
    
    })

}

const getDb=()=>{
  if(_Db)
  return _Db;
  throw "no database found"
}

exports.MongoConnect=MongoConnect;
exports.getDb=getDb;



// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

