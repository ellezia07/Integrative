<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('db_con.php'); // Include the database connection file

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Get the branch name and total sold cars from the form
   $branchName = $_POST['new-branch-name'];
   $totalSoldCars = $_POST['new-total-sold-cars'];

   // Check if the database connection is successful
   if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
   }

   // SQL query to insert the new branch data into the database
   $sql = "INSERT INTO branch (branch_name, total_sold_cars) VALUES ('$branchName', '$totalSoldCars')";

   // Execute the SQL query
   if ($conn->query($sql) === TRUE) {
       echo "New branch added successfully";
   } else {
       echo "Error: " . $sql . "<br>" . $conn->error;
   }

   $conn->close();
}
?>
