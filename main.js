const express = require('express');
const mysql = require('mysql2');
const exhbs = require('express-handlebars');
const app = express();
const path = require('path');
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
});
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }))
// const connection = mysql.createConnection({
//     port: "3306",
//     host: "127.0.0.1",
//     user: "root",
//     database: "istudy",
//     password: "m918514231"
// })
// connection.connect(function (err) {
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else {
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
app.get("/home", (req, res) => {
    res.render("home")
})
app.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'John', surname: 'Doe', age: 25, phone: '1234567890', address: '123 Main St' },
        { id: 2, name: 'Jane', surname: 'Smith', age: 30, phone: '9876543210', address: '456 Elm St' },
        { id: 3, name: 'Bob', surname: 'Johnson', age: 28, phone: '0987654321', address: '789 Oak St' }
        //... add more students here if needed. For simplicity, we have hardcoded some data. For real-world application, you should fetch data from a database.
    ])

})
app.get('/add', (req, res) => {

    res.json([
        {
            name: req.query.name,
            surname: req.query.surname,
            age: req.query.age,
            phone: req.query.phone,
            address: req.query.address
        }
    ])
})

// app.get("/add", (req, res) => {
//     // ?name=Ronaldo&surname=anton&age=27&phone=9876543&address=sdfsdfsdgsdgdsg
//     console.log(req.query.name)
//     let sql = "INSERT INTO students(name,surname,age,phone,address) VALUES('" + req.query.name + "','" + req.query.surname + "','" + req.query.age + "','" + req.query.phone + "','" + req.query.address + "')"
//     connection.query(sql, (err, result) => {
//         if (err) console.log(err);
//         else console.log("Данные добавлены");

//     });
// })

app.listen(8080, () => {
    console.log("Server is running in port 8080")
})