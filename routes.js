const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

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

routes.post('/teachers', instructors.post)
module.exports = routes