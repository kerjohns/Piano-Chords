  <?php
        $mySQLservername = "cescheet";
        $mySQLusername = "cescheet";
        $mySQLpassword = "xxx";
        $mySQLdbname = "cescheet";

        $conn = new mysqli($mySQLservername, $mySQLusername, $mySQLpassword, $mySQLdbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $user = $conn->real_escape_string($_POST['username']);
            $pass = $_POST['password'];
            $repass = $_POST['repassword'];

            if ($pass !== $repass) {
                echo "Passwords do not match. Please try again.";
            } else {
                // Check if username exists
                $stmt = $conn->prepare("SELECT * FROM accounts WHERE username = ?");
                $stmt->bind_param("s", $user);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    echo "Username already exists. Please enter a different username.";
                } else {
                    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

                    $stmt = $conn->prepare("INSERT INTO accounts (username, userPassword) VALUES (?, ?)");
                    $stmt->bind_param("ss", $user, $hashed_password);

                    if ($stmt->execute()) {
                        echo "Your account was created successfully";
                    } else {
                        echo "Error: " . $stmt->error;
                    }
                }

                $stmt->close();
            }
        }

        $conn->close();
        ?>