<?php

require_once 'include/common.php';
require_once 'include/DeleteOrderitemDAO.php';

$product_id = $_GET['product_id'];
$order_id = $_GET['order_id'];

$dao = new DeleteOrderitemDAO();

$result = $dao->deleteorderitem($product_id, $order_id);

var_dump($result);


?>