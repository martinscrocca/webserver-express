const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'MaRtín'

    });



});
app.get('/about', function(req, res) {

    res.render('about');


});


app.get('/data', function(req, res) {
    res.send('Hola Data')


});
app.listen(port, () => { console.log(`escuchando peticiones en el puerto ${port}`); })