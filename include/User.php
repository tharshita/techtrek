<?php
require_once 'common.php';
require_once 'ConnectionManager.php';
require_once 'UserDAO.php';

class User {

    private $password;
    private $id;

    public function __construct($password, $id) {    
        $this->password = $password;
        $this->id = $id;
    }

    public function get_password() {
        return $this->password;
    }

    public function get_id() {
        return $this->id;
    }

}

?>