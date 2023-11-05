// Define carTypeIdCounter outside of any function
var carTypeIdCounter = 0;

document.getElementById("add-new-car-type-button").addEventListener("click", function() {
    var codeInput = document.getElementById("new-car-type-code");
    var descriptionInput = document.getElementById("new-car-type-description");
    var priceInput = document.getElementById("new-car-type-price");
   
    var code = codeInput.value.trim();
    var description = descriptionInput.value.trim();
    var price = priceInput.value.trim();
   
    if (code === '' || description === '' || price === '') {
        alert("All fields are required.");
        return; // Prevent adding an empty car type
    }

    var table = document.getElementById("carTypeTable");

 /// Increment the counter and use it as the carTypeId
 carTypeIdCounter++;
 var carTypeId = carTypeIdCounter;

 // Create a new row
 var newRow = table.insertRow(-1);

 // Set the data-car-type-id attribute
 newRow.setAttribute('data-car-type-id', carTypeId);


// Insert cells for each column
var codeCell = newRow.insertCell(0);
var descriptionCell = newRow.insertCell(1);
var priceCell = newRow.insertCell(2);
var actionsCell = newRow.insertCell(3);

// Set the cell values
codeCell.textContent = code;
descriptionCell.textContent = description;
priceCell.textContent = price;
// Add Edit, Delete and View Customer buttons to the actions cell
var editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.className = "action-button";
editButton.onclick = function() {
    openEditCarTypeModal(newRow);
};

var deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.className = "action-button delete-button";
deleteButton.onclick = function() {
    // Confirm deletion and remove the row
    if (confirm("Are you sure you want to delete this car type?")) {
        table.deleteRow(newRow.rowIndex);
    }
};

// Append the buttons to the actions cell
actionsCell.appendChild(editButton);
actionsCell.appendChild(deleteButton);

// Clear the input fields
codeInput.value = "";
descriptionInput.value = "";
priceInput.value = "";
});

// Function to open the edit modal
function openEditCarTypeModal(row) {
    var modal = document.getElementById("edit-car-type-modal");

    // Extract values from the row
    var codeCell = row.cells[0];
    var descriptionCell = row.cells[1];
    var priceCell = row.cells[2];
    var carTypeId = row.getAttribute('data-car-type-id'); // Add a data attribute to store the car type ID

    // Fill the modal input fields with the current values
    document.getElementById("edit-car-type-code").value = codeCell.textContent;
    document.getElementById("edit-car-type-description").value = descriptionCell.textContent;
    document.getElementById("edit-car-type-price").value = priceCell.textContent;
    document.getElementById("edit-car-type-id").value = carTypeId;

    
    // Show the modal
    modal.style.display = "block";
}
// Close the edit modal
function closeEditCarTypeModal() {
    var modal = document.getElementById("edit-car-type-modal");
    modal.style.display = "none";
}

document.getElementById("update-car-type").addEventListener("click", function () {
    // Get the edited data from the modal
    var editedCarTypeCode = document.getElementById("edit-car-type-code").value.trim();
    var editedCarTypeDescription = document.getElementById("edit-car-type-description").value.trim();
    var editedCarTypePrice = document.getElementById("edit-car-type-price").value.trim();
    var carTypeId = document.getElementById("edit-car-type-id").value.trim();

    console.log("carTypeId:", carTypeId); // Insert this line

    // Validate the inputs
    if (editedCarTypeCode === '' || editedCarTypeDescription === '' || editedCarTypePrice === '' || carTypeId === '') {
        alert("All fields are required.");
        return; // Prevent updating with empty data
    }

    // Update the UI with the edited data
    var row = document.querySelector(`[data-car-type-id="${carTypeId}"]`);

    if (row) {
        row.cells[0].textContent = editedCarTypeCode;
        row.cells[1].textContent = editedCarTypeDescription;
        row.cells[2].textContent = editedCarTypePrice;
    } else {
        alert("Car type not found for update.");
    }
    

    // Close the edit modal
    closeEditCarTypeModal();
});


