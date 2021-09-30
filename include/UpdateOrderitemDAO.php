<?php

require_once 'common.php';
require_once 'ConnectionManager.php';

class UpdateOrderitemDAO {

    public function updateorderitem($product_id, $order_id, $product_qty) {

        // Step 1 - Connect to Database
        $connMgr = new ConnectionManager();
        $pdo = $connMgr->getConnection();

        // Step 2 - Prepare SQL 1
        $sql = "SELECT price from product WHERE id = :product_id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':product_id', $product_id, PDO::PARAM_STR);

        $unitprice = null;
        
        if( $stmt->execute() ) {

            // Step 4 - Retrieve Query Results
            if( $row = $stmt->fetch() ) {
                $unitprice = $row['price'];
            }
        }

        
        $total_price = $product_qty * $unitprice;


        // Step 2 - Prepare SQL 2

        // UPDATE table_name
        // SET column1 = value1, column2 = value2, ...
        // WHERE condition;

        $sql2 = "UPDATE order_item SET product_qty = :product_qty, total_price = :total_price WHERE product_id = :product_id AND order_id = :order_id";

        $stmt2 = $pdo->prepare($sql2);
        $stmt2->bindParam(':product_id', $product_id, PDO::PARAM_STR);
        $stmt2->bindParam(':order_id', $order_id, PDO::PARAM_STR);
        $stmt2->bindParam(':product_qty', $product_qty, PDO::PARAM_STR);
        $stmt2->bindParam(':total_price', $total_price, PDO::PARAM_STR);

        // Step 3 - Execute SQL
        $result2 = $stmt2->execute();

        $message  = '';

        if ($result2 == true){
            $message  = 'Successful update!';
        }


        $output = array();

        array_push($output, array(
            'message' => $message
        ));



        // Step 5 - Return
        return $output; 
    }


}


?>