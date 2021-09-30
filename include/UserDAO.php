<?php

require_once 'common.php';
require_once 'ConnectionManager.php';

class UserDAO {

    public function retrieve($username) {

        // Step 1 - Connect to Database
        $connMgr = new ConnectionManager();
        $pdo = $connMgr->getConnection();


        // Step 2 - Prepare SQL

        
        $sql = "SELECT
                    password
                FROM
                    customer
                WHERE
                    username = :username
        ";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        
        $password = null;


        
        if( $stmt->execute() ) {

            // Step 4 - Retrieve Query Results
            if( $row = $stmt->fetch() ) {
                $password = $row['password'];
            }
        }

        

        // Step 5 - Return
        return $password;
    }


}


?>