const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/home', (req, res) => {
    res.send('Hello word, this is home router');
});


router.get('/about', (req, res) => {
    res.send('Hello word, this is about router');
});

router.get('/sitemap', (req, res) => {
    res.send('Hello word, this is sitemap router');
});

router.get('/profile', (req, res) => {
    res.send('Hello word, this is profile router');
});

router.get('/login', (req, res) => {
    res.send('Hello word, this is login router');
});

router.get('/logout', (req, res) => {
    res.send('Hello word, this is logout router');
});


app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port || 3000));