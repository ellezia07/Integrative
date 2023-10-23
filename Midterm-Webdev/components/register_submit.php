<?php
require_once('db_connection.php');
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (email, username,  password)
                VALUES ('$email', '$username',  '$password')";

    if ($conn->query($sql) === TRUE) {
        header('location:login.php');
    } else {
        echo "Error: " . $sql . "<br>" . $conn_error;
    }

    $conn->close();
}