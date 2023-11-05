// Define a global variable to store the current row ID
var currentRowId = null;

// Function to fetch data from the PHP script
function fetchData() {
    fetch('get_branches.php')
        .then(response => response.json())
        .then(data => {
            // Assuming you have a <table> element with the ID "branchTable" to display the data
            const table = document.querySelector("table");

            // Clear existing rows
            table.innerHTML = '';

            // Add a header row
            const headerRow = table.insertRow();
            headerRow.insertCell(0).textContent = 'Branch Name';
            headerRow.insertCell(1).textContent = 'Total Sold Cars';
            headerRow.insertCell(2).textContent = 'Actions';

            // Populate table with data
            data.forEach(branch => {
                const row = table.insertRow();
                row.setAttribute('data-row-id', branch.id); // Set the unique identifier

                const cell1 = row.insertCell(0);
                cell1.textContent = branch.branch_name;

                const cell2 = row.insertCell(1);
                cell2.textContent = branch.total_sold_cars;

                const cell3 = row.insertCell(2);
                cell3.innerHTML = '<button class="action-button" onclick="openEditModal(this, this.parentElement.parentElement)">Edit</button>' +
                '<button class="action-button delete-button" onclick="deleteRow(this.parentElement.parentElement)">Delete</button>' +
                '<button class="action-button" onclick="viewProducts(this.parentElement.parentElement)">View Products</button>';
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the fetchData function when the page loads to populate the table
window.onload = function() {
    console.log("window.onload function is called");
    fetchData(); // Call fetchData to populate the table
};

// Rest of your existing JavaScript code here
// ...


function openEditModal(button, row) {
    console.log("openEditModal function called with button:", button, "and row:", row); // Debugging line
 
    var modal = document.getElementById("edit-branch-modal");
    modal.style.display = "block";

    // Get the current row data
    var branchName = row.cells[0].textContent; // Assuming the branch name is in the first column
    var totalSoldCars = row.cells[1].textContent; // Assuming total sold cars are in the second column

    // Set the values in the modal input fields
    var branchNameInput = document.getElementById("edit-branch-name");
    var totalSoldCarsInput = document.getElementById("edit-total-sold-cars");

    // Pre-fill the input fields with the existing data
    branchNameInput.value = branchName;
    totalSoldCarsInput.value = totalSoldCars;

    // Set the data-row-id in the hidden input field
    var rowId = row.getAttribute("data-row-id"); // Get the unique identifier of the row
    document.getElementById("edit-branch-id").value = rowId;

     // Set the current row ID to the global variable
     currentRowId = rowId;
     console.log("currentRowId set to:", currentRowId); // Debugging line
}

// Add an event listener to the "Update" button outside the function
document.getElementById("update-branch").addEventListener("click", function() {
    updateBranch(currentRowId); // Pass the currentRowId as an argument
});

// Add an event listener to the "Update" button outside the function
document.getElementById("update-branch").addEventListener("click", function() {
    console.log("updateBranch function called with currentRowId:", currentRowId); // Debugging line
    updateBranch(currentRowId); 
});


// Function to close the edit modal
function closeEditModal() {
    var modal = document.getElementById("edit-branch-modal");
    modal.style.display = "none";
}

function updateBranch(rowId) {
    console.log("updateBranch function is called");
    console.log("Row ID received:", rowId);

    var editedBranchName = document.getElementById("edit-branch-name").value;
    var editedTotalSoldCars = document.getElementById("edit-total-sold-cars").value;

    // Find the specific row to update based on the unique identifier
    var rowToUpdate = document.querySelector(`tr[data-row-id="${rowId}"]`);
    
    if (rowToUpdate) {
        console.log("Row found for update:", rowToUpdate);

        // Now update the cells
        rowToUpdate.cells[0].textContent = editedBranchName;
        rowToUpdate.cells[1].textContent = editedTotalSoldCars;
    } else {
        console.log("Row not found for update.");
    }
    console.log("Row found for update:", rowToUpdate);
    // Close the edit modal
    closeEditModal();
}function updateBranch(rowId) {
    console.log("updateBranch function is called");
    console.log("Row ID received:", rowId);

    var editedBranchName = document.getElementById("edit-branch-name").value;
    var editedTotalSoldCars = document.getElementById("edit-total-sold-cars").value;

    // Find the specific row to update based on the unique identifier
    var rowToUpdate = document.querySelector(`tr[data-row-id="${rowId}"]`);
    
    if (rowToUpdate) {
        console.log("Row found for update:", rowToUpdate);

        // Update the cells
        rowToUpdate.cells[0].textContent = editedBranchName;
        rowToUpdate.cells[1].textContent = editedTotalSoldCars;
    } else {
        console.log("Row not found for update.");
    }

    // Close the edit modal
    closeEditModal();
}


    window.onload = function() {
    console.log("window.onload function is called");
    document.getElementById("update-branch").addEventListener("click", updateBranch);
};

function deleteRow(button) {
    var row = button.closest('tr'); // Find the closest table row to the clicked button

    if (confirm("Are you sure you want to delete this row?")) {
        // Perform the deletion operation or remove the row as needed
        row.remove();
    }
}
document.getElementById("add-new-branch-button").addEventListener("click", function () {
    var branchNameInput = document.getElementById("new-branch-name");
    var totalSoldCarsInput = document.getElementById("new-total-sold-cars");
    
    var branchName = branchNameInput.value.trim();
    var totalSoldCars = totalSoldCarsInput.value.trim();
    
    if (branchName === '' || totalSoldCars === '') {
        alert("Both Branch Name and Total Sold Cars are required.");
        return; // Prevent adding an empty branch
    }
    
    var table = document.querySelector("table");
    var newRow = table.insertRow(table.rows.length - 1);
    newRow.setAttribute("data-row-id", "row" + (table.rows.length - 1)); // Set the data-row-id attribute
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    cell1.textContent = branchName;
    cell2.textContent = totalSoldCars;
    cell3.innerHTML = '<button class="action-button" onclick="openEditModal(this, this.parentElement.parentElement)">Edit</button><button class="action-button delete-button" onclick="deleteRow(this.parentElement.parentElement)">Delete</button><button class="action-button" onclick="viewProducts(this.parentElement.parentElement)">View Products</button>';

    // Clear the input fields
    branchNameInput.value = "";
    totalSoldCarsInput.value = "";
});
