const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//use static for css
app.use('/static', express.static('public'));

//set pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

//calculate bmi
app.post("/", (req, res) => {
    let weight = req.body.weight;
    let height = req.body.height / 100;
    var bmi = parseFloat(weight / (height * height)).toFixed(1);
    var results = "Your BMI Result is :" + bmi

    //render result in index.pug
    res.render('index', { result: results });
});

app.listen(port, (res) => {
    console.log("server runining on port 3000")
})