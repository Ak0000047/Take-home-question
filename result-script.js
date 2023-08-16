// Add an event listener to execute the 'displayTable' function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', displayTable);

// Define the 'displayTable' function
function displayTable() {
  // Retrieve the stored table data from sessionStorage
  var tableData = sessionStorage.getItem('tableData');

  // Check if there is stored table data
  if (tableData) {
    // Get a reference to the element where the resulting table will be displayed
    var resultTableContainer = document.getElementById('resultTableContainer');
    
    // Set the retrieved table data as the HTML content of the result container
    resultTableContainer.innerHTML = tableData;
  }
}
