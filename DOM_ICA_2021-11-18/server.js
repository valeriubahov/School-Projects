const Database = require('better-sqlite3');
const express = require('express');

const app = express();

const db = new Database('chinook.db');

app.post('/customers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sql = "INSERT INTO customers(FirstName,LastName,Email) VALUES (?,?,?)";
    const statement = db.prepare(sql);
    const result = statement.run(['Valeriu', 'Bahov', 'test@test.org']);
    res.end();
});

app.delete('/customers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sql = "DELETE FROM customers where FirstName = ?";
    const statement = db.prepare(sql);
    const result = statement.run(['Valeriu']);
    res.end();
});

app.get('/customers', (req, resp) => {
    const customers = db.prepare("SELECT * FROM CUSTOMERS");
    const myArr = [];
    resp.setHeader('Access-Control-Allow-Origin', '*');
    for (const cust of customers.iterate()) {
        myArr.push(cust);
    }
    resp.send(myArr);
});

app.listen(8888);