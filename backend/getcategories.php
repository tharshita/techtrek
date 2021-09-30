<?php
header('Content-Type: application/json');

require 'config.php';

$query = "SELECT id, name, description, image FROM ecommerce.category";

$stmt = $mysql->prepare($query);

$message = "error";
$output = array();

if ($stmt->execute()) {
	$result = $stmt->get_result();
	while ($row = $result->fetch_assoc()) {
		$category_id = $row['id'];
		$name = $row['name'];
		$description = $row['description'];
		$image = $row['image'];

    	array_push($output, array(
            'category_id' => $category_id, 
            'name'=>$name, 
            'description'=>$description,
            'image'=>$image,
        ));
	}
} else {
	error_log("Error: " . $sql . "<br>" . $mysql->error);
}

$mysql->close();

echo json_encode($output);
?>