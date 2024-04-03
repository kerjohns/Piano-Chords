<?php
include 'db_config.php';

$conn = new mysqli($mySQLservername, $mySQLusername, $mySQLpassword, $mySQLdbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password'];

    if (isset($_POST['register'])) {
        // Registration process
        $stmt = $conn->prepare("SELECT * FROM accounts WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "Username already exists. Please choose a different username.";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $conn->prepare("INSERT INTO accounts (username, userPassword) VALUES (?, ?)");
            $stmt->bind_param("ss", $username, $hashed_password);

            if ($stmt->execute()) {
                echo "Your account was created successfully";
            } else {
                echo "Error: " . $stmt->error;
            }
        }

        $stmt->close();
    } elseif (isset($_POST['login'])) {
        // Login process
        $stmt = $conn->prepare("SELECT userPassword FROM accounts WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['userPassword'])) {
                echo "Login successful";
            } else {
                echo "Incorrect password";
            }
        } else {
            echo "Username does not exist";
        }

        $stmt->close();
    }
}

$conn->close();
?>
