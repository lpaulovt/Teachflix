const fs = require('fs')
const data = require('./data.json')

exports.post = function(req, res){
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] ==""){
            return res.send("Preencha todos os campos!")
        }
    }

    let {avatar_url, name, birth, escolaridade, classes, area} = req.body

    const id = Number(data.instructors.length + 1)
    const created_at = Date.now();
    birth = Date.parse(birth)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        escolaridade,
        classes,
        area,
        created_at
    })


    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("File write error!")
        }
        return res.redirect("/teachers")
    })
}