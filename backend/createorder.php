<?php
header('Content-Type: application/json');

require 'config.php';

//$product_id = $_POST['product_id'];
//$qty = $_POST['qty'];
$customer_id = $_POST['customer_id'];
$total_price = $_POST['total_price'];
$products = $_POST['products'];

$status = 0; //Default 0, meaning order just created

$query = "INSERT INTO ecommerce.order (customer_id, status) VALUES (?, ?)";

$stmt = $mysql->prepare($query);
$stmt->bind_param("si", $customer_id, $status);

$message = "error";

if ($stmt->execute()) {
	$message = "success";
} else {
	error_log("Error: " . $sql . "<br>" . $mysql->error);
}
//If inserted into order table 
if($message == "success") {
    $query = "SELECT LAST_INSERT_ID() AS order_id FROM ecommerce.order";

    $stmt = $mysql->prepare($query);

    $output = array();

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            $order_id = $row['order_id'];

            $products_arr = json_decode($products, true);

            foreach($products_arr as $product) {
                $product_id = $product["product_id"];
                $qty = $product["qty"];

                $query = "INSERT INTO ecommerce.order_item (product_id, order_id, product_qty, total_price) VALUES (?, ?, ?, ?)";

                $stmt = $mysql->prepare($query);
                $stmt->bind_param("iiid", $product_id, $order_id, $qty, $total_price);

                if ($stmt->execute()) {
                    $message = "success";
                } else {
                    error_log("Error: " . $sql . "<br>" . $mysql->error);
                }
            }
        }
    }
}

$mysql->close();

echo json_encode($message);
?>