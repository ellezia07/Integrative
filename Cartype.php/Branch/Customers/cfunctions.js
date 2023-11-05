// Function to open the Edit Customer Modal
function openEditCustomerModal(button) {
    var modal = document.getElementById("edit-customer-modal");
    modal.style.display = "block";

    // Get the current row data
    var row = button.closest("tr");
    var customerName = row.cells[0].textContent; // Assuming the customer name is in the first column
    var contactInfo = row.cells[1].textContent; // Assuming contact info is in the second column
    var address = row.cells[2].textContent; // Assuming address is in the third column

    // Set the values in the modal input fields
    var customerNameInput = document.getElementById("edit-customer-name");
    var contactInfoInput = document.getElementById("edit-customer-contact");
    var addressInput = document.getElementById("edit-customer-address");

    // Pre-fill the input fields with the existing data
    customerNameInput.value = customerName;
    contactInfoInput.value = contactInfo;
    addressInput.value = address;

    // Store the customer ID in a hidden input field
    var customerId = row.getAttribute("data-customer-id");
    document.getElementById("edit-customer-id").value = customerId;

    // Set up the event listener for the "Update" button
    var updateButton = document.getElementById("update-customer");
    updateButton.addEventListener("click", function () {
        // Get the edited data and perform the update here
        var editedCustomerName = document.getElementById("edit-customer-name").value;
        var editedContactInfo = document.getElementById("edit-customer-contact").value;
        var editedAddress = document.getElementById("edit-customer-address").value;
        var customerId = document.getElementById("edit-customer-id").value;

        // Perform the update operation here

        // Close the edit modal
        closeEditCustomerModal();
    });
}

// Function to delete a customer
function deleteCustomer(button) {
    var row = button.closest('tr'); // Find the closest table row to the clicked button

    if (confirm("Are you sure you want to delete this customer?")) {
        // Perform the deletion operation or remove the row as needed
        row.remove();
    }
}

// Define the viewBranches function
function buyCar(button) {
    // Construct the URL with the desired route
    var branchURL = `http://localhost/Cartype.php/Branch/Customers/Abranch/abranches.html`;
    window.location.href = branchURL;
}
document.getElementById("add-new-customer-button").addEventListener("click", function () {
    var customerNameInput = document.getElementById("new-customer-name");
    var contactInfoInput = document.getElementById("new-customer-contact");
    var addressInput = document.getElementById("new-customer-address");

    var customerName = customerNameInput.value.trim();
    var contactInfo = contactInfoInput.value.trim();
    var address = addressInput.value.trim();

    if (customerName === '' || contactInfo === '' || address === '') {
        alert("Name, Contact Info, and Address are required.");
        return; // Prevent adding an empty customer
    }

    var table = document.querySelector("table");
    var newRow = table.insertRow(table.rows.length - 1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.textContent = customerName;
    cell2.textContent = contactInfo;
    cell3.textContent = address;

    // Generate a unique customerId
    var customerId = Math.random().toString(36).substring(2);

    // Set the data-customer-id attribute of the row
    newRow.setAttribute("data-customer-id", customerId);

    // Create a container for the action buttons
    var actionButtons = document.createElement("div");

    // Create and append "Edit" button
    var editButton = document.createElement("button");
    editButton.className = "action-button";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        openEditCustomerModal(this);
    });
    actionButtons.appendChild(editButton);

    // Create and append "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.className = "action-button delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteCustomer(this);
    });
    actionButtons.appendChild(deleteButton);

    // Create and append "Buy a Car" button
    var buyCarButton = document.createElement("button");
    buyCarButton.className = "action-button";
    buyCarButton.textContent = "Buy a Car";
    buyCarButton.addEventListener("click", function () {
        buyCar(this);
    });
    actionButtons.appendChild(buyCarButton);

    cell4.appendChild(actionButtons);

    // Clear the input fields
    customerNameInput.value = "";
    contactInfoInput.value = "";
    addressInput.value = "";
});

window.onload = function () {
    var updateButton = document.getElementById("update-customer");
    updateButton.addEventListener("click", function (e) {
        // Prevent the form from being submitted
        e.preventDefault();

        // Get the edited data
        var editedCustomerName = document.getElementById("edit-customer-name").value;
        var editedContactInfo = document.getElementById("edit-customer-contact").value;
        var editedAddress = document.getElementById("edit-customer-address").value;
        var customerId = document.getElementById("edit-customer-id").value;

        // Trim the inputs
        editedCustomerName = editedCustomerName.trim();
        editedContactInfo = editedContactInfo.trim();
        editedAddress = editedAddress.trim();
        customerId = customerId.trim();

        // Check if the fields are empty
        if (editedCustomerName === '' || editedContactInfo === '' || editedAddress === '') {
            alert("All fields are required.");
            return; // Prevent updating with empty data
        }

        // Try to select the row to update
var rowToUpdate = document.querySelector(`tr[data-customer-id="${customerId}"]`);
console.log(`customerId: ${customerId}`);
console.log(`rowToUpdate: ${rowToUpdate}`);
if (!rowToUpdate) {
    alert("No customer found with the given ID.");
    return; // Prevent updating if no row is found
}

        // Perform the update operation here
        // For demonstration purposes, we'll just simulate a successful update
        var serverResponse = { success: true }; // Replace with actual server update logic

        if (serverResponse.success) {
            // Update the customer's information in the table
            rowToUpdate.cells[0].textContent = editedCustomerName;
            rowToUpdate.cells[1].textContent = editedContactInfo;
            rowToUpdate.cells[2].textContent = editedAddress;

            // Close the edit modal
            closeEditCustomerModal();
        } else {
            alert("Update failed. Please try again.");
        }
    });
};


function closeEditCustomerModal() {
    var modal = document.getElementById("edit-customer-modal");
    modal.style.display = "none";
}
