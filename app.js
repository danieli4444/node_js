 const express = require('express');

 const app = express();

 app.listen(3000);

 app.get('/',(req, res) => {
    res.sendFile('./index.html',{root: __dirname});
 })
 app.get('/about',(req, res) => {
    res.sendFile('/about.html',{root: __dirname});
 })

 // redirects:
 app.get('/about-me',(req, res) => {
    res.redirect('/about');
 })

 // use - 404 page. if the other get request didn't work it will run this:
app.use((req, res) =>{
    res.sendFile('/404.html');
})