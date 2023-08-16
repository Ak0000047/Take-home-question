# Take-home-question


This simple web application allows users to generate a multiplication table based on a user-defined input. The application generates a table with multiplication results, sums, and averages, and displays the result on a separate page.

## Features

1. Input a whole number to generate a multiplication table.
2. The table contains multiplication results from 1 to the input number.
3. Each cell shows the product of row and column numbers (e.g., 2 * 3 = 6).
4. The last row shows the sum of each column.
5. The last cell in the last row displays the average of the sums.
6. The resulting table is displayed on a separate page.

## Usage

### index.html

- `index.html` is the main page where users can input a number and generate the multiplication table.
- It includes a form with an input field and a "Submit" button.
- When the "Submit" button is clicked, the multiplication table is generated and stored in `sessionStorage`.
- Users are redirected to `res.html` to view the resulting table.

### res.html

- `res.html` is the page where the generated multiplication table is displayed.
- It includes a container with an ID of `resultTableContainer`, which is where the table content is injected.
- The table data is retrieved from `sessionStorage` and displayed using the `result-scripts.js` script.

### scripts.js

- `scripts.js` handles the generation of the multiplication table.
- It listens for the "click" event on the "Submit" button and prevents the default form submission behavior.
- The user input is validated to ensure it's a valid positive number.
- The multiplication table HTML is generated based on the input number and stored in `sessionStorage`.
- Users are redirected to `res.html` to view the resulting table.

### result-scripts.js

- `result-scripts.js` is responsible for displaying the stored multiplication table on the `res.html` page.
- It listens for the "DOMContentLoaded" event, retrieves the stored table data from `sessionStorage`, and injects it into the `resultTableContainer`.

### style.css

- `style.css` contains styles for the web app's appearance.
- It defines the styling for the body, container, table, table cells, and headers.

## Running the Application

1. Open `index.html` in a web browser.
2. Enter a whole number into the input field and click "Submit."
3. You will be redirected to `res.html`, where the generated table is displayed.

## Credits

This web app was created by  Akash.v.
