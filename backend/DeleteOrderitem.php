<?php

require_once 'include/common.php';
require_once 'include/DeleteOrderitemDAO.php';

$product_id = 2;
$order_id = 1;

$dao = new DeleteOrderitemDAO();

$result = $dao->deleteorderitem($product_id, $order_id);

var_dump($result);


?>