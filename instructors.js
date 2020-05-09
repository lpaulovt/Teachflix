const fs = require('fs')
const data = require('./data.json')

exports.post = function(req, res){
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] ==""){
            return res.send("Preencha todos os campos!")
        }
    }

    

    fs.writeFile('data.json', JSON.stringify(req.body), function(err){
        if(err){
            return res.send("File write error!")
        }
        return res.redirect("/teachers")
    })
}