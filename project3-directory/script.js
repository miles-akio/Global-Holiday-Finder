// Event listener for the submit button
document.getElementById('submit').addEventListener('click', function() {
    const countryCode = document.getElementById('country').value.trim().toUpperCase(); // Get and format country code
    const year = document.getElementById('year').value.trim(); // Get the year input
    const tableBody = document.querySelector('#holidays-table tbody'); // Reference to the table body

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Check if both inputs are provided
    if (countryCode && year) {
        const url = `https://date.nager.at/api/v2/PublicHolidays/${year}/${countryCode}`; // Construct API URL

        // Fetch data from the public holidays API
        fetch(url)
            .then(response => {
                // Check if the response is OK
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Handle HTTP errors
                }
                return response.json(); // Parse JSON data
            })
            .then(data => {
                // Check if data is returned
                if (data.length > 0) {
                    // Iterate through the holiday data
                    data.forEach(holiday => {
                        // Format the date as month/day/year
                        const dateParts = holiday.date.split('-'); // Split date string (YYYY-MM-DD)
                        const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`; // Rearrange to MM/DD/YYYY

                        const row = document.createElement('tr'); // Create a new table row
                        row.innerHTML = `
                            <td>${formattedDate}</td> <!-- Date cell -->
                            <td>${holiday.name}</td> <!-- Holiday name cell -->
                            <td>${holiday.localName}</td> <!-- Local name cell -->
                            <td>${holiday.countryCode}</td> <!-- Country code cell -->
                            <td><input type="checkbox" ${holiday.global ? 'checked' : ''} disabled></td> <!-- Global checkbox, checked if global, disabled -->
                        `;
                        tableBody.appendChild(row); // Append the row to the table body
                    });
                } else {
                    alert('No holidays found for the specified country and year.'); // Alert if no data found
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error); // Log error to console
                alert('Error fetching data. Please try again later.'); // Alert for fetch error
            });
    } else {
        alert('Please enter both a country code and a year.'); // Alert if inputs are missing
    }
});
