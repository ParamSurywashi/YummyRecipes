const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 4000;

const userControl = require('./Controller/userController');
const recipeRouter = require('./Routers/recipeRoutes');
const recipeSearchRouter = require('./Routers/recipeSearchRouter');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//app.use(express.static('frontend/build'));

main().catch(err => console.log(err));

async function main() {
mongoose.connect('mongodb+srv://Parmanand:Param123@cluster0.p5aqwmv.mongodb.net/YummyRecipe?retryWrites=true&w=majority');
console.log("Database Connected");
}
//mongodb+srv://Parmanand:<Param123>@cluster0.p5aqwmv.mongodb.net/YummyRecipe
//mongodb+srv://Parmanand:<Param123>@cluster0.p5aqwmv.mongodb.net/YummyRecipe?retryWrites=true&w=majority
//mongoose.connect('mongodb://localhost:27017/YummyRecipe');


app.get('/home',(req,res)=>{
   console.log(req.body);
   res.send("Hiiiiii....")
 })

 
 //"test": "echo \"Error: no test specified\" && exit 1",
 //"dev": "node ./server.js",
 //"build": "cd ../client && npm install && npm run build"


 app.use('/recipe',recipeRouter.recipeRoutes);
 app.use('/search',recipeSearchRouter.recipeSearchRoutes);
app.post('/adduser',userControl.adduser);
app.post('/loginuser',userControl.loginuser);

app.listen(port,()=>{
    console.log("Listening to Port : "+port);
})