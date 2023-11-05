document.getElementById("add-new-car-type-button").addEventListener("click", function() {
    var codeInput = document.getElementById("new-car-type-code");
    var descriptionInput = document.getElementById("new-car-type-description");
    var priceInput = document.getElementById("new-car-type-price");
    var soldCarsInput = document.getElementById("new-car-type-sold-cars");

    var code = codeInput.value.trim();
    var description = descriptionInput.value.trim();
    var price = priceInput.value.trim();
    var soldCars = soldCarsInput.value.trim();

    if (code === '' || description === '' || price === '' || soldCars === '') {
        alert("All fields are required.");
        return; // Prevent adding an empty car type
    }

    var table = document.getElementById("carTypeTable");

  // Create a new row
  var newRow = table.insertRow(-1);
  newRow.setAttribute("data-car-type-id", "carType" + (table.rows.length - 1)); // Set the data-car-type-id attribute


// Insert cells for each column
var codeCell = newRow.insertCell(0);
var descriptionCell = newRow.insertCell(1);
var priceCell = newRow.insertCell(2);
var soldCarsCell = newRow.insertCell(3);
var actionsCell = newRow.insertCell(4);

// Set the cell values
codeCell.textContent = code;
descriptionCell.textContent = description;
priceCell.textContent = price;
soldCarsCell.textContent = soldCars;


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

var viewCustomerButton = document.createElement("button");
viewCustomerButton.textContent = "View Customer";
viewCustomerButton.className = "action-button";

// Store the current row in a variable that is accessible in the scope of the viewCustomerButton.onclick function
var currentRow = newRow;

viewCustomerButton.onclick = function() {
    var code = currentRow.cells[0].textContent;
    var description = currentRow.cells[1].textContent;
    var price = currentRow.cells[2].textContent;
    var soldCars = currentRow.cells[3].textContent;

    // Call the openViewCustomerModal function with the correct parameters
    openViewCustomerModal(code, description, price, soldCars);
};

// Append the buttons to the actions cell
actionsCell.appendChild(editButton);
actionsCell.appendChild(deleteButton);
actionsCell.appendChild(viewCustomerButton);

// Function to open the view customer modal
function openViewCustomerModal(branch, carType, name, contact, address, purchaseDate) {
    var modal = document.getElementById("viewCustomerModal");
    var branchElement = document.getElementById("customerInfoBranch");
    var carTypeElement = document.getElementById("customerInfoCarType");
    var nameElement = document.getElementById("customerInfoName");
    var contactElement = document.getElementById("customerInfoContact");
    var addressElement = document.getElementById("customerInfoAddress");
    var purchaseDateElement = document.getElementById("customerInfoPurchaseDate");

    branchElement.textContent = branch;
    carTypeElement.textContent = carType;
    nameElement.textContent =  name;
    contactElement.textContent = contact;
    addressElement.textContent = address;
    purchaseDateElement.textContent = purchaseDate;

    // Show the modal
    modal.style.display = "block";
}

// Clear the input fields
codeInput.value = "";
descriptionInput.value = "";
priceInput.value = "";
soldCarsInput.value = "";
});
// Function to close the customer modal
function closeViewCustomerModal() {
    var modal = document.getElementById("viewCustomerModal");
    modal.style.display = "none";
}

// Function to open the edit modal
function openEditCarTypeModal(row) {
    var modal = document.getElementById("edit-car-type-modal");

    // Extract values from the row
    var codeCell = row.cells[0];
    var descriptionCell = row.cells[1];
    var priceCell = row.cells[2];
    var soldCarsCell = row.cells[3];
    var carTypeId = row.getAttribute('data-car-type-id'); // Add a data attribute to store the car type ID

    // Fill the modal input fields with the current values
    document.getElementById("edit-car-type-code").value = codeCell.textContent;
    document.getElementById("edit-car-type-description").value = descriptionCell.textContent;
    document.getElementById("edit-car-type-price").value = priceCell.textContent;
    document.getElementById("edit-car-type-sold-cars").value = soldCarsCell.textContent;
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
    var editedCarTypeSoldCars = document.getElementById("edit-car-type-sold-cars").value.trim();
    var carTypeId = document.getElementById("edit-car-type-id").value.trim();

    console.log("carTypeId:", carTypeId); // Insert this line

    // Validate the inputs
    if (editedCarTypeCode === '' || editedCarTypeDescription === '' || editedCarTypePrice === '' || editedCarTypeSoldCars === '' || carTypeId === '') {
        alert("All fields are required.");
        return; // Prevent updating with empty data
    }

    // Update the UI with the edited data
    var row = document.querySelector(`[data-car-type-id="${carTypeId}"]`);

    if (row) {
        row.cells[0].textContent = editedCarTypeCode;
        row.cells[1].textContent = editedCarTypeDescription;
        row.cells[2].textContent = editedCarTypePrice;
        row.cells[3].textContent = editedCarTypeSoldCars;
    } else {
        alert("Car type not found for update.");
    }

    // Close the edit modal
    closeEditCarTypeModal();
});






