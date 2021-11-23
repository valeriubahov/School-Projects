// npm install better-sqlite3
const Database = require('better-sqlite3');

const db = new Database('FirstDB.db');
const ships = db.prepare("SELECT * FROM SPACESHIPS, weapons where spaceships.weaponid = weapons.weaponid");

for (const ship of ships.iterate()) {
    console.log(ship);
}
db.close();