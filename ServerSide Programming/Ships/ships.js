fetch('http://localhost:8888/ships').then(
    res => res.json()).then(
        json => {
            displayShips(json);
            const rmvShip = document.querySelectorAll('.delBtn');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteShip);
            }
        });



fetch('http://localhost:8888/weapons').then(
    res => res.json()).then(
        json => {
            displayWeapons(json);
            document.getElementById('newWeapon').addEventListener('submit', addNewWeapon);
            const rmvShip = document.querySelectorAll('.delBtnWeapon');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteWeapons);
            }
        });



fetch('http://localhost:8888/shields').then(
    res => res.json()).then(
        json => {
            displayShields(json);
            document.getElementById('newShield').addEventListener('submit', addNewShield);
            const rmvShip = document.querySelectorAll('.delBtnShield');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteShield);
            }
        });



fetch('http://localhost:8888/coolers').then(
    res => res.json()).then(
        json => {
            displayCoolers(json);
            document.getElementById('newCooler').addEventListener('submit', addNewCooler);
            const rmvShip = document.querySelectorAll('.delBtnCooler');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteCooler);
            }
        });


function addNewWeapon(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newWeapon'));
    fetch('http://localhost:8888/weapons',
        {
            method: 'POST',
            body: formData
        });
}


function addNewShield(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newShield'));
    fetch('http://localhost:8888/shields',
        {
            method: 'POST',
            body: formData
        });
}

function addNewCooler(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newCooler'));
    fetch('http://localhost:8888/coolers',
        {
            method: 'POST',
            body: formData
        });
}

function deleteShip(event) {
    const shipId = event.target.value;
    fetch('http://localhost:8888/ships/' + shipId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}


function deleteWeapons(event) {
    const weaponId = event.target.value;
    fetch('http://localhost:8888/weapons/' + weaponId,
        { method: 'DELETE' }
    ).then(res => res.text())
        .then(res => console.log(res));
}

function deleteShield(event) {
    const shieldId = event.target.value;
    fetch('http://localhost:8888/shields/' + shieldId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}


function deleteCooler(event) {
    const coolerId = event.target.value;
    fetch('http://localhost:8888/coolers/' + coolerId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}


function displayShips(json) {
    const shipDiv = document.querySelector('#ships');
    let str = "<table><tbody>";
    for (const ship of json) {
        str += "<tr><td>"
        str += ship.Ship;
        str += "</td>";
        str += "<td>";
        str += ship.Weapon;
        str += "</td>";
        str += "<td>";
        str += ship.Shield;
        str += "</td>";
        str += "<td>";
        str += ship.PowerPlant;
        str += "</td>";
        str += "<td>";
        str += ship.Engine;
        str += "</td>";
        str += "<td>";
        str += ship.Cooler;
        str += "</td>";
        str += "<td>";
        str += `<button class='delBtn' value=${ship.SHIPID}>Remove</button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}


function displayWeapons(json) {
    const shipDiv = document.querySelector('#weapons');
    let str = "<table><tbody>";
    for (const ship of json) {
        str += "<tr><td>"
        str += ship.WEAPON_NAME;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_SIZE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_GRADE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_DAMAGE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_COST;
        str += "</td>";
        str += "<td>";
        str += `<button class='delBtnWeapon' value=${ship.WEAPONID}>Remove</button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}



function displayShields(json) {
    const shipDiv = document.querySelector('#shields');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.SHIELD_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.SHILED_GRADE;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_HP;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_COST;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_EMISSION;
        str += "</td>";
        str += "<td>";
        str += `<button class='delBtnShield' value=${shield.SHIELDID}>Remove</button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}



function displayCoolers(json) {
    const shipDiv = document.querySelector('#coolers');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.COOLER_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_GRADE;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_POWER;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_COST;
        str += "</td>";
        str += "<td>";
        str += `<button class='delBtnCooler' value=${shield.COOLERID}>Remove</button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}