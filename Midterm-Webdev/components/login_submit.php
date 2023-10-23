
<?php
session_start();

require_once('db_connection.php');

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query the database to check the credentials
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Valid login; you can redirect to a welcome page or set a session variable
        $_POST['username'] = $username;
        header("Location: Models.php"); // Replace with your welcome page
        exit();
    } else {
        // Invalid login; display an error message
        echo "<script>
        if (confirm('Invalid email or password! Want to register an account?')){
            window.location.href = 'register.php';
        }else{
        window.location.href = 'login.php' }; 
        </script>";
    }
    $conn->close();
}
?>