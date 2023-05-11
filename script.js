function addRow() {
  // Get input values
  const name = document.getElementById("name").value;
  const points = document.getElementById("points").value;
  const volume = document.getElementById("volume").value;
  const addons = document.getElementById("addons").value;
  const units = document.getElementById("units").value;

  // Create a new row and cells
  const table = document.getElementById("table");
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const pointsCell = row.insertCell(1);
  const volumeCell = row.insertCell(2);
  const addonsCell = row.insertCell(3);
  const unitsCell = row.insertCell(4);

  // Add input values to cells
  nameCell.innerHTML = name;
  pointsCell.innerHTML = points;
  volumeCell.innerHTML = volume;
  addonsCell.innerHTML = addons;
  unitsCell.innerHTML = units;

  // create an object with the input values
  const inputObj = {
    name,
    points,
    volume,
    addons,
    units
  };

  // get the existing data from local storage
  let existingData = JSON.parse(localStorage.getItem('RYOBI'));

  // if there is no existing data, create a new array and add the input object
  if (!existingData) {
    existingData = [];
    existingData.push(inputObj);
  } else {
    // check if the name already exists in the array
    const existingIndex = existingData.findIndex(data => data.name === name);
    if (existingIndex !== -1) {
      // if name already exists, update the input object
      existingData[existingIndex] = inputObj;
    } else {
      // if name doesn't exist, add the input object to the existing data array
      existingData.push(inputObj);
    }
  }

  // save the updated data to local storage
  localStorage.setItem('RYOBI', JSON.stringify(existingData));

  // clear the input values
  document.getElementById("name").value = "";
  document.getElementById("points").value = "";
  document.getElementById("volume").value = "";
  document.getElementById("addons").value = "";
  document.getElementById("units").value = "";

  function displayData() {
    // get the saved data from local storage
    const savedData = JSON.parse(localStorage.getItem('RYOBI'));
  
    // if there is no saved data, return
    if (!savedData) return;

    function clearTable() {
      const table = document.getElementById("table");
      while (table.rows.length > 1) {
        table.deleteRow(-1);
      }
    }
  
    // clear the table first
    clearTable();
  
    // loop through the saved data and create table rows
    savedData.forEach((data, index) => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <th scope="row">${data.name}</th>
        <td>${data.points}</td>
        <td>${data.volume}</td>
        <td>${data.addons}</td>
        <td>${data.units}</td>
      `;
      document.getElementById('table').appendChild(newRow);
    });
  }
  

  // update the table
  displayData();
}


// function addRow() {
//   // Get input values
//   const name = document.getElementById("name").value;
//   const points = document.getElementById("points").value;
//   const volume = document.getElementById("volume").value;
//   const addons = document.getElementById("addons").value;
//   const units = document.getElementById("units").value;

//   // Create a new row and cells
//   const table = document.getElementById("table");
//   const row = table.insertRow(-1);
//   const nameCell = row.insertCell(0);
//   const pointsCell = row.insertCell(1);
//   const volumeCell = row.insertCell(2);
//   const addonsCell = row.insertCell(3);
//   const unitsCell = row.insertCell(4);

//   // Add input values to cells
//   nameCell.innerHTML = name;
//   pointsCell.innerHTML = points;
//   volumeCell.innerHTML = volume;
//   addonsCell.innerHTML = addons;
//   unitsCell.innerHTML = units;
// }

// // select the submit button
// const submitBtns = document.querySelectorAll('#button');

// // add event listener to each submit button
// submitBtns.forEach(btn => {
// btn.addEventListener('click', () => {
//   // get the input values
//   const name = btn.parentNode.parentNode.querySelector('th').textContent;
//   const points = document.getElementById(`RYOBI_${name} POINTS--`).value;
//   const volume = document.getElementById(`RYOBI_${name} VOLUME--`).value;
//   const addons = document.getElementById(`RYOBI_${name} ADD ONS--`).value;
//   const units = document.getElementById(`RYOBI_${name} UNITS--`).value;

//   // create an object with the input values
//   const inputObj = {
//     points,
//     volume,
//     addons,
//     units
//   };

//   // get the existing data from local storage
//   let existingData = JSON.parse(localStorage.getItem('RYOBI'));

//   // if there is no existing data, create a new array and add the input object
//   if (!existingData) {
//     existingData = [];
//     existingData.push(inputObj);
//   } else {
//     // add the input object to the existing data array
//     existingData.push(inputObj);
//   }

//   // save the updated data to local storage
//   localStorage.setItem('RYOBI', JSON.stringify(existingData));

//   // clear the input values
//   document.getElementById(`RYOBI_${name} POINTS--`).value = '';
//   document.getElementById(`RYOBI_${name} VOLUME--`).value = '';
//   document.getElementById(`RYOBI_${name} ADD ONS--`).value = '';
//   document.getElementById(`RYOBI_${name} UNITS--`).value = '';

//   // update the table
//   displayData();
// });
// });

// // display the saved data on the page
// function displayData() {
//   // get the saved data from local storage
//   const savedData = JSON.parse(localStorage.getItem('RYOBI'));

//   // if there is no saved data, return
//   if (!savedData) return;

//   // clear the table first
//   clearTable();

//   // loop through the saved data and create table rows
//   savedData.forEach((data, index) => {
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//       <th scope="row">${index + 1}</th>
//       <td>${data.points}</td>
//       <td>${data.volume}</td>
//       <td>${data.addons}</td>
//       <td>${data.units}</td>
//     `;
//     document.getElementById('table').appendChild(newRow);
//   });
// }



// // call the displayData function to display the saved data on page load
// displayData();
