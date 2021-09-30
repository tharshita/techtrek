<?php

require_once 'include/common.php';
require_once 'include/UpdateOrderitemDAO.php';

$product_id = 1;
$order_id = 1;
$product_qty = 2;

$dao = new UpdateOrderitemDAO();

$result = $dao->updateorderitem($product_id, $order_id, $product_qty);

var_dump($result);


?>