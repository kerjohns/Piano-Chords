<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scaleable=no">
        <meta http-equiv="X-UA-Compatible" content = "IE=edge,chrom=1">
        <meta name = "HandheldFriendly" content = "true">
        <title> Create User </title>
        <link rel="icon" type="image/x-icon" href="../Piano-Chords/Images/favicon.ico">
        <link href="stylesheet/basic.css" type="text/css" rel="stylesheet">
        <link href="stylesheet/stylesheet.css" type="text/css" rel="stylesheet">
    </head>

    <body>
        <div id="logbody" class="logbody"><!--holds the whole body-->
            <h1> Create an Account </h1>
        <body>

            <form method='post' class="main"><!--holds the form to fill out-->
                <br><br>
                <label for="username">username </label>
                <br>
                <input type="text" placeholder="Enter Username" name="username" required>
                <br>

                <label for="password">password </label> <br>
                <input type="password" placeholder="******" name="password" required>
                <br>

                <label for="repassword">reenter password </label> <br>
                <input type="repassword" placeholder="******" name="repassword" required>
                <br>
                <input type="submit" name="createUser" value="Sign Up">
                <br>
                <p class="noacc">Already have an account?   <a href="login.html">Log In</a></a></p>


            </form>
        </div>


        <?php
        require "createUserSendToDatabase.php";
        // user clicked the login button */
        if ( isset($_POST["createUser"]) ) {
            $username = $_POST["username"]; 
            $password = $_POST["password"]; 
            $repassword = $_POST["repassword"];

            if($password !== $repassword) {
                echo "<p style='white'> Password does not match </p>";
            } else {
                $db = connectDB();
                $stmt = $db->prepare("SELECT * FROM accounts WHERE username = :username");
                $stmt->bindParam(':username', $username);
                $stmt->execute();
        
                if($stmt->rowCount() > 0){
                    echo "<p style='white'> User already exists </p>";
                } else {
                    $db = null;
                    create($username, $password, $repassword);
                }
            }
        }
        ?>


    </body>
</html>
