# Public Holidays Finder

## Overview

The **Public Holidays Finder** is a web application that enables users to easily retrieve and display public holiday information based on a specified country and year. This tool fetches data from the [Nager.Date API](https://date.nager.at/), which provides a comprehensive list of public holidays for various countries around the world. By leveraging this API, users can quickly check holiday dates, names, and local representations, making it a valuable resource for travel planning, research, or educational purposes.

## Features

- **Country Code Input:** Users can input the two-letter country code (e.g., `US` for the United States, `DE` for Germany) to specify the country they want to check for public holidays.
- **Year Input:** Users can enter a specific year to fetch holidays for that particular year.
- **Dynamic Table Display:** The application displays a dynamic table with the following holiday details:
  - **Date:** The date of the holiday.
  - **Name:** The official name of the holiday.
  - **Local Name:** The name of the holiday in the local language.
  - **Country Code:** The two-letter code representing the country.
  - **Global Checkbox:** A checkbox indicating if the holiday is recognized globally (disabled, non-editable).
- **User-Friendly Interface:** The app features an intuitive and responsive design for easy navigation and interaction across various devices.
- **Error Handling:** Users are informed of any errors related to input validation or network issues.

## Technologies Used

- **HTML:** Structure of the web application, defining the layout and content.
- **CSS:** Styling and layout design, providing visual aesthetics and enhancing user experience.
- **JavaScript:** Client-side scripting for fetching data from the API and dynamically updating the HTML content.
- **Fetch API:** Utilized to make asynchronous HTTP requests to the Nager.Date API for retrieving public holiday data.

## Project Structure

```
public-holidays-finder/
├── index.html          # Main HTML file containing the structure of the application
├── styles.css          # CSS file for styling the application
└── script.js           # JavaScript file containing the logic for fetching data and updating the UI
```

### File Descriptions

- **`index.html`:** This file sets up the basic structure of the application, including a header for navigation, input fields for user input, and a table to display the results. It links to the CSS for styling and the JavaScript for functionality.
- **`styles.css`:** This file defines styles for the overall layout, header, navigation links, input fields, buttons, and table. It ensures the app is visually appealing and user-friendly.

- **`script.js`:** This file contains the core functionality of the application. It handles user interactions, makes API calls to fetch holiday data, processes the response, and dynamically updates the HTML to display the results in the table.

## Installation

To set up and run the Public Holidays Finder locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/public-holidays-finder.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd public-holidays-finder
   ```

3. **Open the `index.html` file in a Web Browser:**
   You can simply double-click the `index.html` file or use a local server to serve the files.

   **Using Live Server in VS Code:**

   - Open the project in Visual Studio Code.
   - Install the "Live Server" extension if you haven't already.
   - Right-click on `index.html` and select "Open with Live Server."

## Usage

1. **Enter the Country Code:**
   Type the two-letter country code (e.g., `US` for the United States, `DE` for Germany) in the "Country Code" input field.

2. **Enter the Year:**
   Specify the year for which you want to find public holidays in the "Year" input field (e.g., `2021`).

3. **Click the Submit Button:**
   After entering the required information, click the **Submit** button. The app will fetch the data and display it in a table below the input fields.

4. **View the Results:**
   The table will populate with the public holidays for the specified country and year. Each holiday will display its date, name, local name, country code, and a checkbox indicating if it's a global holiday (disabled).

## Code Explanation

### HTML Structure

- The `index.html` file establishes the core layout of the application. It includes:
  - A header with navigation links.
  - Input fields for the user to enter the country code and year.
  - A button to submit the inputs.
  - A table for displaying the holiday data fetched from the API.

### CSS Styles

- The `styles.css` file provides the visual styling of the application. Key styles include:
  - Header styles for background color, text alignment, and navigation links.
  - Flexbox layout for input fields to align them neatly.
  - Table styling for borders, padding, and header colors to enhance readability.

### JavaScript Functionality

- The `script.js` file contains all the logic for the application's interactivity:
  - An event listener for the submit button to capture user input.
  - Validation to ensure both the country code and year are provided.
  - Construction of the API URL based on user input.
  - Fetching data from the Nager.Date API and processing the response.
  - Dynamic generation of table rows to display holiday information, including a disabled checkbox for the global status.
  - Error handling to inform users of any issues encountered during data retrieval.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest enhancements or additional features, feel free to create a pull request or open an issue in the repository.

### Guidelines for Contribution

1. **Fork the Repository:** Create a personal copy of the repository to work on.
2. **Create a Feature Branch:** Make a branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Your Changes:** Implement your feature or fix.
4. **Commit Your Changes:**
   ```bash
   git commit -m "Add your descriptive message here"
   ```
5. **Push to the Branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request:** Submit your changes for review.

## Acknowledgments

- [Nager.Date API](https://date.nager.at/) for providing reliable public holiday data.
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) documentation for reference on web standards.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) documentation for understanding language features and best practices.

---

For any questions or feedback, please contact miles.shinmachi@gmail.com
