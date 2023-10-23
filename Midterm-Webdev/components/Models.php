<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Models</title>
    <link rel="stylesheet" href="styles/dashboard.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    <div class="container-fluid">
        <div class="row vh-100">

            <!-- Profile  -->
            <div class="col-2" style="border-right: 2px solid gray">
                <div class="row container vh-100 align-items-center m-1">
                    <div>
                        <img src="assets/car-icon.png" alt="" class="profile-picture rounded-circle">
                    </div>

                    <div class="row gap-2">
                        <button onclick="toModels()" class="btn btn-light" type="button">Models</button>
                        <button onclick="toBranches()" class="btn btn-light" type="button">Branches</button>
                        <button onclick="toCustomers()" class="btn btn-light" type="button">Customers</button>
                    </div>
                    <button onclick="logout()" class="btn btn-warning">Logout</button>
                </div>
            </div>

            <!-- Item tables or selection of the items -->
            <div class="col-7 bg-light text-center p-4" style="border-right: 2px solid gray">
                <h3>Models</h3>
                <div class="row align-self-start text-center">
                    <table class="col table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th style="width: 50px">Code</th>
                                <th style="width: 50px">Name</th>
                                <th style="width: 50px">Price</th>
                            </tr>

                            <tr>
                                <th style="width: 50px">001</th>
                                <th style="width: 50px">Toyota Camry</th>
                                <th style="width: 50px">$25,000</th>
                            </tr>
                    </table>

                </div>
            </div>

            <!-- Description Part for the cars -->
            <div class="col-3 text-center bg-light p-4">
                <h3>Description</h3>
                <div>
                    <img src="styles/toyota-camry.jpg" alt="" class="description-picture img-fluid bg-primary">
                    <p class="card-text">The Toyota Camry is a well-known midsize sedan that has been
                        a popular choice among consumers for many years. It's recognized for its reliability, comfort,
                        and a reputation for delivering a smooth and efficient driving experience.</p>
                </div>
                <div class="col d-flex align-item-center justify-content-center p-4">
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger ms-2">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>
<script>
    function logout() {
        if (confirm("Are you sure you want to log out?")) {
            window.location.href = "login.php";
        }
    }

    function toModels() {
        var targetPage = "Models.php"; // This is to navigate to Models Page
        window.location.href = targetPage;
    }

    function toBranches() {
        var targetPage = "Branches.php"; // This is to navigate to Models Page
        window.location.href = targetPage;
    }

    function toCustomers() {
        var targetPage = "Customers.php"; // This is to navigate to Models Page
        window.location.href = targetPage;
    }
</script>