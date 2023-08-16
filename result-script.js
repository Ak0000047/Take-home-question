document.addEventListener('DOMContentLoaded', displayTable);

function displayTable() {
  var tableData = sessionStorage.getItem('tableData');

  if (tableData) {
    var resultTableContainer = document.getElementById('resultTableContainer');
    resultTableContainer.innerHTML = tableData;
  }
}