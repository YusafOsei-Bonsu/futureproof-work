// Importing express
const express = require('express');
// Importing body parser
const bodyParser = require('body-parser'); 
// Imported path module
const path = require('path');
// Creating an express application
const app = express();

// look for HTML files to render in  the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// To extract form data from the POST request body
app.use(express.urlencoded());

// Using the EJS template to serve the html files
app.engine('html', require('ejs').renderFile);

// Parse the engine to HTML 
app.set('view engine', 'html');

// create application/x-www-form-urlencoded parser
const urlEncodedParser = bodyParser.urlencoded({ extended: true })

// To use the CSS stylesheet(s)
app.use(express.static(`${__dirname}/public`));

// By entering 'localhost:8080' route into the url, a webpage presenting "Hello World!" appears
app.get('/', (req, res) => res.render('index'));

// Route for POST requests
app.post('/showCard', urlEncodedParser, (req, res) => {
    // console.log(req.body);
    switch (req.body.events) {
        case "birthday":
            res.status(202).render('bday.html', {data: req.body});
            break;
        case "easter":
            res.status(202).render('easter.html', {data: req.body});
            break;
        case "valentines":
            res.status(202).render('valentines.html', {data: req.body});
            break;
        case "christmas":
            res.status(202).render('xmas.html', {data: req.body});
            break;
        case "halloween":
            res.status(202).render('halloween.html', {data: req.body});
            break;
        default:
            res.status(404).send(`404: Could not find webpage`)
            break;
    }
});

// Listening to port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening on port 8080..'));