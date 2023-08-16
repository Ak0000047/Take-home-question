// Get a reference to the 'generateButton' element
var generateButton = document.getElementById('generateButton');

// Add a 'click' event listener to the 'generateButton'
generateButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the 'generateTable' function to create the table
  generateTable();
});

// Define the 'generateTable' function
function generateTable() {
  // Get the user input value and convert it to an integer
  var inputNumber = parseInt(document.getElementById('numberInput').value);

  // Check if the input is not a valid positive number
  if (isNaN(inputNumber) || inputNumber <= 0) {
    // Display an alert if the input is invalid
    alert('Please enter a valid positive number.');
    return;
  }

  // Initialize the 'tableHTML' variable with the opening 'table' tag
  var tableHTML = '<table>';
  // Create the header row with placeholders for column labels
  tableHTML += '<tr><th></th>';

  // Generate column labels based on the user input number
  for (let i = 1; i <= inputNumber; i++) {
    tableHTML += `<th>${i}</th>`;
  }

  // Add 'Sum' and 'Average' labels to the header row in red color
  tableHTML += '<th style="color: red;">Sum</th><th style="color: red;">Average</th></tr>';

  // Generate rows and calculate sum and average for each row
  for (let i = 1; i <= inputNumber; i++) {
    // Create a row with the current row number as label
    tableHTML += `<tr><th>${i}</th>`;
    var sum = 0;

    // Calculate the product for each cell and update 'sum'
    for (let j = 1; j <= inputNumber; j++) {
      var product = i * j;
      tableHTML += `<td>${product}</td>`;
      sum += product;
    }

    // Add sum and average values to the row
    tableHTML += `<td>${sum}</td><td>${(sum / inputNumber).toFixed(2)}</td></tr>`;
  }

  // Complete the table structure
  tableHTML += '</table>';

  // Store the generated table HTML in 'sessionStorage'
  sessionStorage.setItem('tableData', tableHTML);

  // Redirect to 'res.html' to display the result
  window.location.href = 'res.html';
}


