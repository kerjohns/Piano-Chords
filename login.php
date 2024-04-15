<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scaleable=no">
        <meta http-equiv="X-UA-Compatible" content = "IE=edge,chrom=1">
        <meta name = "HandheldFriendly" content = "true">
        <title> Login </title>
        <link rel="icon" typ-e="image/x-icon" href="../Piano-Chords/Images/favicon.ico">
        <link href="stylesheet/basic.css" type="text/css" rel="stylesheet">
        <link href="stylesheet/stylesheet.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <div id="logbody" class="logbody"><!--holds the whole body-->

            <h1> Log in </h1>

            <form method="post" class="main"><!--holds the form to fill out-->
                <br><br>
                <label for="email">email </label>
                <br>
                <input type="text" placeholder="Enter Email" name="email" required>
                <br>

                <label for="password">password </label> <br>
                <input type="password" placeholder="******" name="password" required>

                <br>
                <button type="submit" name="login">Log in</button>
                <br>
                <p class="noacc">Don't have an account?   <a href="createUser.php">Sign up</a></a></p>

            </form>

            <?php
            require "createUserSendToDatabase.php";
                if(isset($_POST["login"])) {
                    $email = $_POST["email"];
                    $password = $_POST["password"];
                    if(authenticate($email, $password)) {
                        header("LOCATION: home.html");
                        exit();
                    } else {
                        echo "Incorrect username or password";
                    }
        
                }
            ?>

        </div>
    </body>
</html>