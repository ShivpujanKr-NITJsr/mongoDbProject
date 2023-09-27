const path = require('path');
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const connection=require('./util/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const User=require('./models/user')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("65149cd30cf3b01665a9dfa9")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

connection.MongoConnect(()=>{
  
  app.listen(3000)
})

