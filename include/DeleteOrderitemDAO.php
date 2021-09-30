<?php

require_once 'common.php';
require_once 'ConnectionManager.php';

class DeleteOrderitemDAO {

    public function deleteorderitem($product_id, $order_id) {

        // Step 1 - Connect to Database
        $connMgr = new ConnectionManager();
        $pdo = $connMgr->getConnection();


        // Step 2 - Prepare SQL
        $sql = "DELETE from order_item WHERE product_id = :product_id AND order_id = :order_id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':product_id', $product_id, PDO::PARAM_STR);
        $stmt->bindParam(':order_id', $order_id, PDO::PARAM_STR);

        // Step 3 - Execute SQL
        $result = $stmt->execute();

        $message  = '';

        if ($result == true){
            $message  = 'Successful deleted!';
        }


        $output = array();

        array_push($output, array(
            'message' => $message
        ));


        // Step 4 - Retrieve Query Results
        // $msg = "Record Delete Successful";

        // echo $result;


        // Step 5 - Return
        return $output; 
    }


}


?>