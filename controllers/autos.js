const Auto = require(`../models/Auto`);

exports.todosLosAutos = (req, res) =>{
  Auto
    .find()
    .sort({precio})
    .exec((err, autos) =>{
    console.log(autos);
    res.end(`autos`);
  });
};
