<?php
header('Content-Type: application/json');

require 'config.php';

$query = "SELECT product_id, order_id, product_qty, total_price FROM ecommerce.order_item";

$stmt = $mysql->prepare($query);

$output = array();

if ($stmt->execute()) {
	$result = $stmt->get_result();
	while ($row = $result->fetch_assoc()) {
		$product_id = $row['product_id'];
		$order_id = $row['order_id'];
		$product_qty = $row['product_qty'];
		$total_price = $row['total_price'];

    	array_push($output, array(
            'product_id' => $product_id, 
            'order_id'=>$order_id, 
            'product_qty'=>$product_qty,
            'total_price'=>$total_price
        ));
	}
} else {
	error_log("Error: " . $sql . "<br>" . $mysql->error);
}

$mysql->close();

echo json_encode($output);
?>