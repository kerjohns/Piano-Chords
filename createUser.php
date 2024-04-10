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

            <div class="main"><!--holds the form to fill out-->
                <br><br>
                <label for="username">username </label>
                <br>
                <input type="text" placeholder="Enter Username" name="username" required>
                <br>

                <label for="password">password </label> <br>
                <input type="password" placeholder="******" name="password" required>
                <br>

                <label for="repassword">reenter password </label> <br>
                <input type="repassword" placeholder="******" name="password" required>
                <br>
                <button onclick="document.location='home.html'"type="Log in">Sign Up</button>
                <br>
                <p class="noacc">Already have an account?   <a href="login.html">Log In</a></a></p>


            </div>
        </div>


        <!--trying to form a create user page-->
        <form method="post" action="createUser.php">
            <label for="username">username: </label>
            <input type="text" id="username" name="username" value="cool name"><br>
            <label for="password">password: </label>
            <input type="text" id="password" name="password" value="something secret"><br><br>
            <input type="submit" value="Create User" name="createUser">
        </form> 

        <?php
        require "createUserSendToDatabase.php";
        // user clicked the login button */
        if ( isset($_POST["createUser"]) ) {
            $username = $_POST["username"]; 
            $password = $_POST["password"]; 
            echo create($username, $password);
        }
        ?>


    </body>
</html>
