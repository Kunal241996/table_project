let chemicalData = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: null, unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
    { id: 8, chemicalName: "Sodium Hydroxide", vendor: "Dow Chemical", density: 2102.30, viscosity: 58.33, packaging: "Bag", packSize: 100, unit: "kg", quantity: 9100.12 },
    { id: 9, chemicalName: "Sulfuric Acid", vendor: "BASF", density: 1840.00, viscosity: 20.15, packaging: "Drum", packSize: 150, unit: "L", quantity: 5000.75 },
    { id: 10, chemicalName: "Acetic Acid", vendor: "LG Chem", density: 1049.38, viscosity: 15.22, packaging: "Barrel", packSize: 200, unit: "L", quantity: 7200.88 },
    { id: 11, chemicalName: "Sodium Chloride", vendor: "Formosa", density: 2165.67, viscosity: 40.30, packaging: "Bag", packSize: 50, unit: "kg", quantity: 3050.99 },
    { id: 12, chemicalName: "Ethylene Glycol", vendor: "Sinopec", density: 1105.00, viscosity: 60.00, packaging: "Barrel", packSize: 180, unit: "L", quantity: 6590.15 },
    { id: 13, chemicalName: "Ammonium Nitrate", vendor: "DowDuPont", density: 1800.00, viscosity: 70.12, packaging: "Bag", packSize: 150, unit: "kg", quantity: 7201.44 },
    { id: 14, chemicalName: "Propylene Glycol", vendor: "Formosa", density: 1042.00, viscosity: 90.23, packaging: "Barrel", packSize: 190, unit: "L", quantity: 8321.34 },
    { id: 15, chemicalName: "Benzene", vendor: "LG Chem", density: 876.00, viscosity: 25.30, packaging: "Drum", packSize: 200, unit: "L", quantity: 4450.67 }
  ];

// Function to render the table
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    chemicalData.forEach((item, index) => {
        let row = `<tr>
            <td>${item.id}</td>
            <td>${item.chemicalName}</td>
            <td>${item.vendor}</td>
            <td>${item.density}</td>
            <td>${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.packSize}</td>
            <td>${item.unit}</td>
            <td>${item.quantity}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editRow(${index})">Edit</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to sort the table
function sortTable(columnIndex) {
    chemicalData.sort((a, b) => {
        let aVal = Object.values(a)[columnIndex];
        let bVal = Object.values(b)[columnIndex];
        return aVal > bVal ? 1 : -1;
    });
    renderTable();
}

// Function to add a new row
function addRow() {
    const newRow = {
        id: chemicalData.length + 1,
        chemicalName: "New Chemical",
        vendor: "New Vendor",
        density: 0,
        viscosity: 0,
        packaging: "N/A",
        packSize: 0,
        unit: "N/A",
        quantity: 0
    };
    chemicalData.push(newRow);
    renderTable();
}

// Function to delete a selected row
function deleteRow() {
    chemicalData.pop();
    renderTable();
}

// Function to refresh data
function refreshData() {
    chemicalData = [
        { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
        { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
        { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
        { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
        { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
        { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: null, unit: "t", quantity: 6272.34 },
        { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
        { id: 8, chemicalName: "Sodium Hydroxide", vendor: "Dow Chemical", density: 2102.30, viscosity: 58.33, packaging: "Bag", packSize: 100, unit: "kg", quantity: 9100.12 },
        { id: 9, chemicalName: "Sulfuric Acid", vendor: "BASF", density: 1840.00, viscosity: 20.15, packaging: "Drum", packSize: 150, unit: "L", quantity: 5000.75 },
        { id: 10, chemicalName: "Acetic Acid", vendor: "LG Chem", density: 1049.38, viscosity: 15.22, packaging: "Barrel", packSize: 200, unit: "L", quantity: 7200.88 },
        { id: 11, chemicalName: "Sodium Chloride", vendor: "Formosa", density: 2165.67, viscosity: 40.30, packaging: "Bag", packSize: 50, unit: "kg", quantity: 3050.99 },
        { id: 12, chemicalName: "Ethylene Glycol", vendor: "Sinopec", density: 1105.00, viscosity: 60.00, packaging: "Barrel", packSize: 180, unit: "L", quantity: 6590.15 },
        { id: 13, chemicalName: "Ammonium Nitrate", vendor: "DowDuPont", density: 1800.00, viscosity: 70.12, packaging: "Bag", packSize: 150, unit: "kg", quantity: 7201.44 },
        { id: 14, chemicalName: "Propylene Glycol", vendor: "Formosa", density: 1042.00, viscosity: 90.23, packaging: "Barrel", packSize: 190, unit: "L", quantity: 8321.34 },
        { id: 15, chemicalName: "Benzene", vendor: "LG Chem", density: 876.00, viscosity: 25.30, packaging: "Drum", packSize: 200, unit: "L", quantity: 4450.67 }
      ];
    renderTable();
}

// Function to save data
function saveData() {
    console.log(chemicalData);
    alert('Data saved to console (for demonstration purposes).');
}

// Function to move row up
function moveRowUp() {
    let selectedRow = chemicalData.pop();
    chemicalData.unshift(selectedRow);
    renderTable();
}

// Function to move row down
function moveRowDown() {
    let selectedRow = chemicalData.shift();
    chemicalData.push(selectedRow);
    renderTable();
}

// Function to edit a row
function editRow(index) {
    const row = document.querySelectorAll('tbody tr')[index];
    const cells = row.querySelectorAll('td');
    cells.forEach((cell, i) => {
        if (i < cells.length - 1) {
            let currentValue = cell.innerText;
            cell.innerHTML = `<input type="text" value="${currentValue}" />`;
        }
    });
    row.querySelector('.btn-warning').innerText = 'Save';
    row.querySelector('.btn-warning').onclick = () => saveEditRow(index);
}

// Function to save edited row
function saveEditRow(index) {
    const row = document.querySelectorAll('tbody tr')[index];
    const inputs = row.querySelectorAll('input');
    chemicalData[index] = {
        id: parseInt(inputs[0].value),
        chemicalName: inputs[1].value,
        vendor: inputs[2].value,
        density: parseFloat(inputs[3].value),
        viscosity: parseFloat(inputs[4].value),
        packaging: inputs[5].value,
        packSize: parseFloat(inputs[6].value),
        unit: inputs[7].value,
        quantity: parseFloat(inputs[8].value)
    };
    renderTable();
}

renderTable();