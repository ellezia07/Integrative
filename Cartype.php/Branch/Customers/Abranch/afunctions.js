document.addEventListener('DOMContentLoaded', function () {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const branchName = urlParams.get('branchName');
    const totalSoldCars = urlParams.get('totalSoldCars');

    // Display the data in the table
    if (branchName && totalSoldCars) {
        const tableBody = document.querySelector('.table-body');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${branchName}</td>
            <td>${totalSoldCars}</td>
            <td>
                <button class="action-button" onclick="editBranch(this)">Edit</button>
                <button class="action-button delete-button" onclick="deleteBranch(this)">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);
    }
});

function editBranch(button) {
    var modal = document.getElementById("edit-branch-modal");
    modal.style.display = "block";

    // Get the current row data
    var row = button.closest("tr");
    var branchName = row.cells[0].textContent;
    var totalSoldCars = row.cells[1].textContent;

    // Set the values in the modal input fields
    var branchNameInput = document.getElementById("edit-branch-name");
    var totalSoldCarsInput = document.getElementById("edit-total-sold-cars");

    // Pre-fill the input fields with the existing data
    branchNameInput.value = branchName;
    totalSoldCarsInput.value = totalSoldCars;

    // Store the row element in a data attribute to identify it when updating
    document.getElementById("edit-branch-id").value = row.rowIndex;
}

function deleteBranch(button) {
    var row = button.closest('tr');
    if (confirm("Are you sure you want to delete this branch?")) {
        row.remove();
    }
}

 // Function to update the data when the "Update" button is clicked
 document.getElementById("update-branch").addEventListener("click", function () {
    // Get the edited branch name, total sold cars, and branch ID
    var editedBranchName = document.getElementById("edit-branch-name").value;
    var editedTotalSoldCars = document.getElementById("edit-total-sold-cars").value;
    var branchId = document.getElementById("edit-branch-id").value;

    // Update the UI with the edited data
    var row = document.querySelector('tr[data-row-id="' + branchId + '"]');
    row.cells[0].textContent = editedBranchName;
    row.cells[1].textContent = editedTotalSoldCars;

    // Close the edit modal
    closeEditModal();
});

