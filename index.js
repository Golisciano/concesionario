const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");



//variable de la configuracion
const port = 3000;
const db = "mongob://localhost/concesionaria";


//objeto app
const app = express();


// setear middlewares
app.use(`/`(req,res,next) => {
  console.log(`Hola soy un middlewares comun`)
})
app.get(`/concesionaria`, (req,res) =>{
  res.send(`hola`);
})

//configurar vistas

//conectarse a db
mongoose.connect(db,{
useNewUrlParser: true,
useFindAndModify: false,
useUnifiedTopoLogy: true
.then(() => console.log(`Db conectada @ ${db}`))
.catch(err => console.log(err));
})
//importar rutas
app.use(`/`, require(`/routes/auto`));

//listen
app.listen(port,() => {
  console.log(`server escuchando en puerto ${}`);
});
