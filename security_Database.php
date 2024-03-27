<?php
$mySQLservername = "cescheet"; 
$mySQLusername = "cescheet"; 
$mySQLpassword = " xxx "; 
$mySQLdbname = "cescheet"; 

$conn = new mysqli($mySQLservername, $mySQLusername, $mySQLpassword, $mySQLdbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM accounts WHERE username = '$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Username already exists. Please try a different username.";
    } else {
        $sql = "INSERT INTO accounts (username, userPassword) VALUES ('$user', '$pass')";

        if ($conn->query($sql) === TRUE) {
            echo "Your account created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
 
 // this is going to need to be updates to incourporate this with out create account // page and its variables 

<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Username: <input type="text" name="username" required><br>
        Password: <input type="password" name="password" required><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
