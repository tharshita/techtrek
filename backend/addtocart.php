<?php
header('Content-Type: application/json');

require 'config.php';

$customer_id = $_POST['customer_id'];
$product_id = $_POST['product_id'];
$price = $_POST['price'];
$qty = $_POST['qty'];

$status = 0; //Default 0, meaning order not finalized

$query = "SELECT id FROM ecommerce.order WHERE customer_id = ? AND status = 0 ORDER BY id DESC LIMIT 1";

$stmt = $mysql->prepare($query);
$stmt->bind_param("i", $customer_id);

$output = array();

$message = "error";

if ($stmt->execute()) {
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $order_id = $row['id'];

        $query = "INSERT INTO ecommerce.order_item (product_id, order_id, product_qty, total_price) VALUES (?, ?, ?, ?)";

        $stmt = $mysql->prepare($query);
        $stmt->bind_param("iiid", $product_id, $order_id, $qty, $price);

        if ($stmt->execute()) {
            $message = "success";
        } else {
            $message = "error inserting order item";
            error_log("Error: " . $mysql->error);
        }
    }
}
else {
	error_log("Error: " . $mysql->error);
    $message = "error retrieving order id";
}

$mysql->close();

echo json_encode($message);
?>