const fs = require('fs')
const data = require('./data.json')
const {age} = require('./utils')

//CREATE

exports.post = function(req, res){
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] ==""){
            return res.send("Preencha todos os campos!")
        }
    }

    let {avatar_url, name, birth, escolaridade, classes, area} = req.body

    const id = Number(data.teachers.length + 1)
    const created_at = Date.now();
    birth = Date.parse(birth)

    data.teachers.push({
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

//SHOW

exports.show = function(req, res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!") 

    const teacher = {
        ...foundTeacher,
        age:age(foundTeacher.birth),
        area: foundTeacher.area.split(","),
        created_at:""
    }

    return res.render('teachers/show', {teacher})
}