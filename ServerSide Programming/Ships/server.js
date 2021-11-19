const express = require('express');
const cors = require('cors');
const app = express();

const Database = require('better-sqlite3');
app.options('*', cors());

const multer = require('multer');
const upload = multer();

const db = new Database('myDB.db');

let SHIP_QUERY = "select s.SHIPID as SHIPID, s.SHIP_NAME as Ship, w.WEAPON_NAME as Weapon, sh.SHIELD_NAME as Shield, p.PPLANT_NAME as PowerPlant, e.ENGINE_NAME as Engine, c.COOLER_NAME as Cooler from SPACESHIPS s, WEAPONS w, SHIELDS sh, POWER_PLANT p, ENGINES e, COOLERS c"
    + " where s.WEAPONID = w.WEAPONID"
    + " and s.SHIELDID = sh.SHIELDID"
    + " and s.POWERPLANTID = p.POWERPLANTID"
    + " and s.ENGINEID = e.ENGINEID"
    + " and s.COOLERID = c.COOLERID";


app.get('/ships', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const ships = db.prepare(SHIP_QUERY);
    const arrOut = [];
    for (const ship of ships.iterate()) {
        arrOut.push(ship);
    }
    res.end(JSON.stringify(arrOut));

});


app.get('/weapons', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("SELECT * FROM WEAPONS");
    const arrOut = [];
    for (const weap of weapons.iterate()) {
        arrOut.push(weap);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/shields', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const shields = db.prepare("SELECT * FROM SHIELDS");
    const arrOut = [];
    for (const shield of shields.iterate()) {
        arrOut.push(shield);
    }
    res.end(JSON.stringify(arrOut));
});


app.get('/coolers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const shields = db.prepare("SELECT * FROM COOLERS");
    const arrOut = [];
    for (const shield of shields.iterate()) {
        arrOut.push(shield);
    }
    res.end(JSON.stringify(arrOut));
});


app.post('/weapons', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO WEAPONS (WEAPON_NAME, WEAPON_SIZE, WEAPON_GRADE, WEAPON_DAMAGE, WEAPON_COST) values(?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.weapName, req.body.weapSize, req.body.weapGrade, req.body.weapDamage, req.body.weapCost]);
    res.end();
});


app.post('/shields', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO SHIELDS (SHIELD_NAME, SHIELD_SIZE, SHILED_GRADE, SHIELD_HP, SHIELD_COST, SHIELD_EMISSION) values(?, ?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.shieldName, req.body.shieldSize, req.body.shieldGrade, req.body.shieldHP, req.body.shieldCost, req.body.shieldEmission]);
    res.end();
});

app.post('/coolers', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO COOLERS (COOLER_NAME, COOLER_SIZE, COOLER_GRADE, COOLER_POWER, COOLER_COST) values(?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.coolName, req.body.coolSize, req.body.coolGrade, req.body.coolPower, req.body.coolCost]);
    res.end();
});


app.delete('/ships/:SHIPID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.SHIPID;
    const ships = db.prepare("DELETE FROM SPACESHIPS where SHIPID=?");
    ships.run([req.params.SHIPID]);
    res.end();
});


app.delete('/weapons/:WEAPONID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.WEAPONID;
    const ships = db.prepare("DELETE FROM WEAPONS where WEAPONID=?");
    try {
        ships.run([req.params.WEAPONID]);
    }
    catch (ex) {
        if (ex.code == 'SQLITE_CONSTRAINT_FOREIGNKEY') {
            res.send("FK_ERROR");
        }
    }
    res.end();
});


app.delete('/shields/:SHIELDID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM SHIELDS where SHIELDID=?");
    ships.run([req.params.SHIELDID]);
    res.end();
});


app.delete('/coolers/:COOLERID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM COOLERS where COOLERID=?");
    ships.run([req.params.COOLERID]);
    res.end();
});



app.listen(8888, () => console.log('server running on port ' + 8888));