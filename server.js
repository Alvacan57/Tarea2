var express = require('express');
var path = require('path');
var app = express();
var canciones = require('./canciones');

app.listen(3000, function () { 
  console.log('App escuchando en puerto 3000!');
});
    
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.use('/canciones', canciones);

app.get('/acerca', function (req, res) {
    res.sendFile(path.join(__dirname,'public','index3.html'));
});

app.get('/descarga0', function (req, res) {
    res.download(path.join(__dirname,'public','files','BeatIt.jpg'),'BeatIt.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

app.get('/descarga1', function (req, res) {
    res.download(path.join(__dirname,'public','files','FirstOfTheYear.jpg'),'FirstOfTheYear.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

app.get('/descarga2', function (req, res) {
    res.download(path.join(__dirname,'public','files','DontBeCruel.jpg'),'DontBeCruel.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

app.get('/descarga3', function (req, res) {
    res.download(path.join(__dirname,'public','files','RadioGaga.jpg'),'RadioGaga.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

app.get('/descarga4', function (req, res) {
    res.download(path.join(__dirname,'public','files','ItsMyLife.jpg'),'ItsMyLife.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

app.use(function(req, res, next) {
    res.status(404).send('Esa pagina no existe!');
  });