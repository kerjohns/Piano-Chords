<?php


function connectDB()
{
    $config = parse_ini_file("/local/my_web_files/ajvangor/db.ini");
    $dbh = new PDO($config['dsn'], $config['username'], $config['password']);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

function authenticate($email, $password){
    try {
        $dbh = connectDB();
        $statement = $dbh->prepare("SELECT username FROM accounts where username = :username and userPassword = :password;");
        $statement->bindParam(":username", $email);
        $statement->bindParam(":password", $password);
        $statement->execute();
        $user = $statement->fetchColumn();
        $dbh = null;
        return $user;
    } catch (PDOException $e) {
        print "Error!" . $e->getMessage() . "<br/>";
        die();
    }
}

function create($username, $password) 
{
    try { 
        $dbh = connectDB(); 
        $dbh->beginTransaction(); 
        // check if there are enough balance in the from account 
        $statement = $dbh->prepare("INSERT INTO accounts (username, userPassword) VALUES (:username, :password)"); 
        $statement->bindParam(":username", $username); 
        $statement->bindParam(":password", $password); 
        $result = $statement->execute(); 
        
        $dbh->commit(); 
    } catch (Exception $e) { 
        $dbh->rollBack(); 
        echo "Failed: " . $e->getMessage(); 
    } 
}

?>