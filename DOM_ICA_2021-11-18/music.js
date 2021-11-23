fetch('http://localhost:8888/customers')
    .then(res => res.json())
    .then(json => {
        displayCustomers(json);
    });


function displayCustomers(json) {
    const custView = document.getElementById('customerView');

    const domTable = document.createElement('table');

    domTable.setAttribute("border", "1");

    let domHeaderTR = document.createElement('tr');

    let domHeaderTHFN = document.createElement('th');
    domHeaderTHFN.innerText = 'First Name';

    let domHeaderTHLN = document.createElement('th');
    domHeaderTHLN.innerText = 'Last Name';

    domHeaderTR.appendChild(domHeaderTHFN);
    domHeaderTR.appendChild(domHeaderTHLN);
    domTable.appendChild(domHeaderTR);

    const arrFilter = json.filter(x => x.Country == 'Canada');
    for (json of arrFilter) {
        let domTR = document.createElement('tr');

        let domTDFN = document.createElement('td');
        domTDFN.innerText = json.FirstName;

        let domTDLN = document.createElement('td');
        domTDLN.innerText = json.LastName;

        domTR.appendChild(domTDFN);
        domTR.appendChild(domTDLN);
        domTable.appendChild(domTR);
    }
    custView.appendChild(domTable);
}