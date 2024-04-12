<?php

echo "<pre>";
print_r($_POST);
echo "</pre>";

function connectDB()
{
    $config = parse_ini_file("/local/my_web_files/ajvangor/db.ini");
    $dbh = new PDO($config['dsn'], $config['username'], $config['password']);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

function create($username, $password, $repassword) 
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