<?php
header('Content-Type: application/json');

require 'config.php';

$query = "SELECT id, title, price, description, category_id, image, qty FROM ecommerce.product";

$stmt = $mysql->prepare($query);

$message = "error";
$output = array();

if ($stmt->execute()) {
	$result = $stmt->get_result();
	while ($row = $result->fetch_assoc()) {
		$product_id = $row['id'];
		$title = $row['title'];
		$price = $row['price'];
		$description = $row['description'];
		$category_id = $row['category_id'];
		$image = $row['image'];
		$qty = $row['qty'];

    	array_push($output, array(
            'product_id' => $product_id, 
            'title'=>$title, 
            'price'=>$price, 
            'description'=>$description,
            'category_id'=>$category_id, 
            'image'=>$image,
            'qty'=>$qty
        ));
	}
} else {
	error_log("Error: " . $sql . "<br>" . $mysql->error);
}

$mysql->close();

echo json_encode($output);
?>