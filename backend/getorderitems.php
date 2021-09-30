<?php
header('Content-Type: application/json');

require 'config.php';

$customer_id = $_GET['customer_id'];

$query = "SELECT o.product_id, p.title, o.order_id, o.product_qty, o.total_price FROM ecommerce.order_item o INNER JOIN ecommerce.product p ON p.id = o.product_id INNER JOIN ecommerce.order od ON od.id = o.order_id WHERE od.customer_id = ? AND od.status = 0";

$stmt = $mysql->prepare($query);
$stmt->bind_param("i", $customer_id);

$output = array();

if ($stmt->execute()) {
	$result = $stmt->get_result();
	while ($row = $result->fetch_assoc()) {
		$product_id = $row['product_id'];
		$title = $row['title'];
		$order_id = $row['order_id'];
		$product_qty = $row['product_qty'];
		$total_price = $row['total_price'];

    	array_push($output, array(
            'product_id' => $product_id, 
            'title' => $title, 
            'order_id'=>$order_id, 
            'product_qty'=>$product_qty,
            'total_price'=>$total_price
        ));
	}
} else {
	error_log("Error: ". $mysql->error);
}

$mysql->close();

echo json_encode($output);
?>