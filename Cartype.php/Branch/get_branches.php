<?php
include('db_con.php'); // Include the database connection file

// Get the branch name and total sold cars from the form
$branchName = $_POST['new-branch-name'];
$totalSoldCars = $_POST['new-total-sold-cars'];

// SQL query to insert the new branch data into the database
$sql = "INSERT INTO branch (branch_name, total_sold_cars) VALUES ('$branchName', '$totalSoldCars')";
   echo $sql;
   
// Execute the SQL query
if ($conn->query($sql) === TRUE) {
   echo "New branch added successfully";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
