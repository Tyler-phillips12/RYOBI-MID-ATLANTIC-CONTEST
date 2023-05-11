// Get all input elements on the page
// JavaScript code
// const saveButton = document.getElementById('submit1');

// saveButton.addEventListener('click', () => {
//   // Get all input elements on the page
//   const inputs = document.querySelectorAll('input');

//   // Loop through each input and set its value to localStorage using its ID
//   inputs.forEach(input => {
//     const id = input.id;
//     const value = input.value;
//     localStorage.setItem(id, value);
//   });
// });

// JavaScript code

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
}

// select the submit button
const submitBtns = document.querySelectorAll('#button');

// add event listener to each submit button
submitBtns.forEach(btn => {
btn.addEventListener('click', () => {
  // get the input values
  const name = btn.parentNode.parentNode.querySelector('th').textContent;
  const points = document.getElementById(`RYOBI_${name} POINTS--`).value;
  const volume = document.getElementById(`RYOBI_${name} VOLUME--`).value;
  const addons = document.getElementById(`RYOBI_${name} ADD ONS--`).value;
  const units = document.getElementById(`RYOBI_${name} UNITS--`).value;

  // create an object with the input values
  const inputObj = {
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
    // add the input object to the existing data array
    existingData.push(inputObj);
  }

  // save the updated data to local storage
  localStorage.setItem('RYOBI', JSON.stringify(existingData));

  // clear the input values
  document.getElementById(`RYOBI_${name} POINTS--`).value = '';
  document.getElementById(`RYOBI_${name} VOLUME--`).value = '';
  document.getElementById(`RYOBI_${name} ADD ONS--`).value = '';
  document.getElementById(`RYOBI_${name} UNITS--`).value = '';
});
});

// display the saved data on the page
function displayData() {
// get the saved data from local storage
const savedData = JSON.parse(localStorage.getItem('RYOBI'));

// if there is no saved data, return
if (!savedData) return;

// loop through the saved data and create table rows
savedData.forEach((data, index) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row">${index + 1}</th>
    <td>${data.points}</td>
    <td>${data.volume}</td>
    <td>${data.addons}</td>
    <td>${data.units}</td>
  `;
  document.getElementById('table').appendChild(newRow);
});
}

// call the displayData function to display the saved data on page load
displayData();


// let usersData = {};

// function saveMessage() {
//     const usernameInput = document.getElementById('usernameInput');
//     const totalPointsInput = document.getElementById('total-points');
//     const totalVolumeInput = document.getElementById('total-volume');
//     const totalAddOnsInput = document.getElementById('total-add-ons');
//     const totalUnitsInput = document.getElementById('total-units');
//     const username = usernameInput.value;
//     const totalPoints = totalPointsInput.value;
//     const totalVolume = totalVolumeInput.value;
//     const totalAddOns = totalAddOnsInput.value;
//     const totalUnits = totalUnitsInput.value;

//     // If the user is not already in the usersData object, add them
//     if (!usersData.hasOwnProperty(username)) {
//       usersData[username] = [];
//     }

//     // Add the data to the user's data
//     usersData[username].push({
//       totalPoints: totalPoints,
//       totalVolume: totalVolume,
//       totalAddOns: totalAddOns,
//       totalUnits: totalUnits
//     });

//     // Clear the input fields
//     usernameInput.value = '';
//     totalPointsInput.value = '';
//     totalVolumeInput.value = '';
//     totalAddOnsInput.value = '';
//     totalUnitsInput.value = '';
//   }

//   function displayResults() {
//     const resultsTable = document.getElementById('resultsTable');
//     const tbody = resultsTable.querySelector('tbody');
//     tbody.innerHTML = '';

//     // Iterate over each user in the usersData object
//     for (const username in usersData) {
//       if (usersData.hasOwnProperty(username)) {
//         const userData = usersData[username];
//         // Iterate over each message for the current user and add it to the results table
//         userData.forEach((data) => {
//           const row = document.createElement('tr');
//           const usernameCell = document.createElement('td');
//           usernameCell.textContent = username;
//           const totalPointsCell = document.createElement('td');
//           totalPointsCell.textContent = data.totalPoints;
//           const totalVolumeCell = document.createElement('td');
//           totalVolumeCell.textContent = data.totalVolume;
//           const totalAddOnsCell = document.createElement('td');
//           totalAddOnsCell.textContent = data.totalAddOns;
//           const totalUnitsCell = document.createElement('td');
//           totalUnitsCell.textContent = data.totalUnits;
//           row.appendChild(usernameCell);
//           row.appendChild(totalPointsCell);
//           row.appendChild(totalVolumeCell);
//           row.appendChild(totalAddOnsCell);
//           row.appendChild(totalUnitsCell);
//           tbody.appendChild(row);
//         });
//       }
//     }
//   }



// function displayResults() {
//   const resultsTable = document.getElementById('resultsTable');
//   const tbody = resultsTable.querySelector('tbody');
//   tbody.innerHTML = '';

//   // Get the data for the current user and add it to the results table
//   const username = document.getElementById('usernameInput').value;
//   if (usersData.hasOwnProperty(username)) {
//     const userData = usersData[username];
//     userData.forEach((message) => {
//       const row = document.createElement('tr');
//       const usernameCell = document.createElement('td');
//       usernameCell.textContent = username;
//       const messageCell = document.createElement('td');
//       messageCell.textContent = message;
//       row.appendChild(usernameCell);
//       row.appendChild(messageCell);
//       tbody.appendChild(row);
//     });
//   }
// }


// // JavaScript code
// const prefix = "RYOBI_";
// const resultsTable = document.getElementById('resultsTable');
// const tbody = resultsTable.querySelector('tbody');

// // Loop through all items in localStorage and add the relevant ones to the results table
// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   if (key.startsWith(prefix)) {
//     const id = key.substring(prefix.length);
//     const value = localStorage.getItem(key);
//     const row = document.createElement('tr');
//     const idCell = document.createElement('td');
//     idCell.textContent = id;
//     const valueCell = document.createElement('td');
//     valueCell.textContent = value;
//     row.appendChild(idCell);
//     row.appendChild(valueCell);
//     tbody.appendChild(row);
//   }
// }

// JavaScript code
// function saveMessage() {
//     const usernameInput = document.getElementById('usernameInput');
//     const messageInput = document.getElementById('messageInput');
//     const username = usernameInput.value;
//     const message = messageInput.value;
//     localStorage.setItem(username, message);
//     usernameInput.value = '';
//     messageInput.value = '';
//   }

//   function displayResults() {
//     const resultsTable = document.getElementById('resultsTable');
//     const tbody = resultsTable.querySelector('tbody');
//     tbody.innerHTML = '';

//     // Loop through all items in localStorage and add the ones for the current user to the results table
//     const username = document.getElementById('usernameInput').value;
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       if (key === username) {
//         const value = localStorage.getItem(key);
//         const row = document.createElement('tr');
//         const usernameCell = document.createElement('td');
//         usernameCell.textContent = key;
//         const messageCell = document.createElement('td');
//         messageCell.textContent = value;
//         row.appendChild(usernameCell);
//         row.appendChild(messageCell);
//         tbody.appendChild(row);
//       }
//     }
//   }




// function logOnClick() {
//     const buttons = document.querySelectorAll('.button');
//     const totalPointsInput = document.getElementById('total-points-m');
//     const totalVolumeInput = document.getElementById('total-volume-m');
//     const totalAddOnInput = document.getElementById('total-add-ons-m');
//     const totalUnitsInput = document.getElementById('total-units-sold-m')
  
//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const totalPointsM = totalPointsInput.value;
//         const totalVolumeM = totalVolumeInput.value;
//         const totalAddOnsM = totalAddOnInput.value;
//         const totalUnitsM = totalUnitsInput.value;
//         localStorage.setItem('totalPointsM', totalPointsM);
//         localStorage.setItem('totalVolumeM', totalVolumeM);
//         localStorage.setItem('totalAddOnsM', totalAddOnsM);
//         localStorage.setItem('totalUnitsM', totalUnitsM);
//         console.log("You have clicked the button. Good Job keep it up you're doing great!");
//       });
//     });
//   }

//  logOnClick() 
//     const buttons = document.querySelectorAll('.button');
//     const totalPointsInputC = document.getElementById('total-points-c');
//     const totalVolumeInputC = document.getElementById('total-volume-c');
//     const totalAddOnInputC = document.getElementById('total-add-ons-c');
//     const totalUnitsInputC = document.getElementById('total-units-sold-c');
  
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const totalPointsC = totalPointsInputC.value;
//             const totalVolumeC = totalVolumeInputC.value;
//             const totalAddOnsC = totalAddOnInputC.value;
//             const totalUnitsC = totalUnitsInputC.value;
//             localStorage.setItem('totalPointsC-' + button.id, totalPointsC);
//             localStorage.setItem('totalVolumeC-' + button.id, totalVolumeC);
//             localStorage.setItem('totalAddOnsC-' + button.id, totalAddOnsC);
//             localStorage.setItem('totalUnitsC-' + button.id, totalUnitsC);
//             console.log("You have clicked the button. Good Job keep it up you're doing great!");
//         });
//     });
// }




//   logOnClick();

//   function displayLocalStorageData() {
//     const localStorageDataDiv = document.getElementById('local-storage');
//     const buttons = document.querySelectorAll('.button');
//     let localStorageData = '';
//     buttons.forEach(button => {
//         const totalPointsC = localStorage.getItem('totalPointsC-' + button.id);
//         const totalVolumeC = localStorage.getItem('totalVolumeC-' + button.id);
//         const totalAddOnsC = localStorage.getItem('totalAddOnsC-' + button.id);
//         const totalUnitsC = localStorage.getItem('totalUnitsC-' + button.id);
//         localStorageData += `
//             <li>${button.id} Points: ${totalPointsC}</li>
//             <li>${button.id} Volume: ${totalVolumeC}</li>
//             <li>${button.id} Add-Ons: ${totalAddOnsC}</li>
//             <li>${button.id} Units Sold: ${totalUnitsC}</li>
//         `;
//     });
//     localStorageDataDiv.innerHTML = localStorageData;
// }




//   function displayLocalStorageData() {
//     const localStorageDataDiv = document.getElementById('local-storage');
//     const totalPointsM = localStorage.getItem('totalPointsM');
//     const totalVolumeM = localStorage.getItem('totalVolumeM');
//     const totalAddOnsM = localStorage.getItem('totalAddOnsM');
//     const totalUnitsM = localStorage.getItem('totalUnitsM');
//     const localStorageData = `
//       <li>Mark Points: ${totalPointsM}</li>
//       <li>Mark Volume: ${totalVolumeM}</li>
//       <li>Mark Add-Ons: ${totalAddOnsM}</li>
//       <li>Mark Units Sold: ${totalUnitsM}</li>
//     `;
//     localStorageDataDiv.innerHTML = localStorageData;
//   }

//   displayLocalStorageData();

//   function logOnClick() {
//     const buttons = document.querySelectorAll('.button');
//     const totalPointsInputC = document.getElementById('total-points-c');
//     const totalVolumeInputC = document.getElementById('total-volume-c');
//     const totalAddOnInputC = document.getElementById('total-add-ons-c');
//     const totalUnitsInputC = document.getElementById('total-units-sold-c')
  
//     buttons.forEach(button => {
//         const localStorageDataDiv = document.getElementById('local-storage');
//         const totalPointsC = localStorage.getItem('totalPointsC');
//         const totalVolumeC = localStorage.getItem('totalVolumeC');
//         const totalAddOnsC = localStorage.getItem('totalAddOnsC');
//         const totalUnitsC = localStorage.getItem('totalUnitsC');
//         const localStorageData = `
//           <li>Calvin Points: ${totalPointsC}</li>
//           <li>Calvin Volume: ${totalVolumeC}</li>
//           <li>Calvin Add-Ons: ${totalAddOnsC}</li>
//           <li>Calvin Units Sold: ${totalUnitsC}</li>
//         `;
//         localStorageDataDiv.innerHTML = localStorageData;
//       button.addEventListener('click', () => {
//         const totalPointsC = totalPointsInputC.value;
//         const totalVolumeC = totalVolumeInputC.value;
//         const totalAddOnsC = totalAddOnInputC.value;
//         const totalUnitsC = totalUnitsInputC.value;
//         localStorage.setItem('totalPointsC', totalPointsC);
//         localStorage.setItem('totalVolumeC', totalVolumeC);
//         localStorage.setItem('totalAddOnsC', totalAddOnsC);
//         localStorage.setItem('totalUnitsC', totalUnitsC);
//         console.log("You have clicked the button. Good Job keep it up you're doing great!");
//       });
//     });
//   }
//   logOnClick();

//   function displayLocalStorageData() {
//   }

//   displayLocalStorageData();

// const inputs = document.querySelectorAll('input');
// const values = [];

// inputs.forEach(input => {
//   values.push(input.value);
// });

// displayLocalStorageData(values);

// function calculate() {
//     // Get input values
//     const pointsM = parseInt(document.getElementById('total-points-m').value);
//     const volumeM = parseFloat(document.getElementById('total-volume-m').value);
//     const addonsM = parseFloat(document.getElementById('total-add-ons-m').value);
//     const unitsSoldM = parseInt(document.getElementById('total-units-sold-m').value);

//     // Calculate points and revenue
//     const points = pointsM + volumeM + addonsM + unitsSoldM;
//     const revenue = unitsSoldM * 400;

//     // Display results
//     document.getElementById('points-m').textContent = points;
//     document.getElementById('revenue-m').textContent = revenue;
//   }

//   document.getElementById('submit1').addEventListener('click', function() {
//     calculate();
//   });
