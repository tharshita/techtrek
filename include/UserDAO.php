<?php

require_once 'common.php';
require_once 'ConnectionManager.php';
require_once 'User.php';

class UserDAO {

    public function retrieve($username) {

        // Step 1 - Connect to Database
        $connMgr = new ConnectionManager();
        $pdo = $connMgr->getConnection();


        // Step 2 - Prepare SQL

        
        $sql = "SELECT
                    password, id
                FROM
                    customer
                WHERE
                    username = :username
        ";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        
        $password = null;
        
        $list = array();
        $return_crev = null;

        
        if( $stmt->execute() ) {

            while($row = $stmt->fetch()) {
                $return_crev = 
                    new User(
                        $row['password'],
                        $row['id']);

                array_push($list, $return_crev);
            }

            // Step 4 - Retrieve Query Results
            // if( $row = $stmt->fetch() ) {
            //     $password = $row['password'];
            // }
        }



        
        // Step 5 - Return
        return $list;
    }


}


?>