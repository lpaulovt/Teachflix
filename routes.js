const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    res.redirect('/teachers')
})

routes.get('/teachers', function(req, res) {
    res.render('teachers/index')
})

routes.get('/students', function(req, res){
    res.render('students')
})

routes.get('/teachers/create', function(req, res){
    res.render('teachers/create')
})

routes.post('/teachers', function(req, res){
    return res.send(req.body)
})
module.exports = routes