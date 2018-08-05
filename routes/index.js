var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    console.log("request /");
    res.json({"App":"App TD", "Company": "The Dresser"});
});



router.get('/dress/:nID', (req, res)=>{
    console.log("request /dress");
    var nID = req.params.nID;
    if (isNaN(nID)){
        res.json({"Description":"No es un número de vestido válido" });
    }
    else{
        switch (nID){
            case "1":
                res.json({"ID":"1", "Description":"Vestido largo", "Color": "Rojo" });
            break;
            case "2":
                res.json({"ID":"2", "Description":"Vestido corto", "Color": "Azul" });
            break;
            default:
                res.json({"Description":"No se encontró ese número de vestido" });
            break;
        }
    }
});



module.exports = router