var generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', function (event) {
  event.preventDefault();
  generateTable();
});

function generateTable() {
  var inputNumber = parseInt(document.getElementById('numberInput').value);

  if (isNaN(inputNumber) || inputNumber <= 0) {
    alert('Please enter a valid positive number.');
    return;
  }

  var tableHTML = '<table>';
  tableHTML += '<tr><th></th>';

  for (let i = 1; i <= inputNumber; i++) {
    tableHTML += `<th>${i}</th>`;
  }

  tableHTML += '<th style="color: red;">Sum</th><th style="color: red;">Average</th></tr>';

  for (let i = 1; i <= inputNumber; i++) {
    tableHTML += `<tr><th>${i}</th>`;
    var sum = 0;

    for (let j = 1; j <= inputNumber; j++) {
      var product = i * j;
      tableHTML += `<td>${product}</td>`;
      sum += product;
    }

    tableHTML += `<td>${sum}</td><td>${(sum / inputNumber).toFixed(2)}</td></tr>`;
  }

  tableHTML += '</table>';


  sessionStorage.setItem('tableData', tableHTML);


  window.location.href = 'res.html';
}
