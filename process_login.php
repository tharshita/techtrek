<?php
// session_start();
require_once 'include/common.php';
require_once 'include/UserDAO.php';

// var_dump($_POST);

$dao = new UserDAO();

$password = '';
$name = '';
$message = "error";
$output = array();

if (isset($_POST['username'])&& isset($_POST['password']))
{
    $username = $_POST['username'];
    $pass = $_POST['password'];
    // var_dump($_POST);

    if( $username != '' && $pass != '' ) {
    
        //retrieve username and password from database
        $user = $dao->retrieve($username);
        
        // check if user exist
        if ($user != null)
        {
            $password = $user;
            var_dump($password);
            var_dump($pass);

            // Authentication
            if ($pass == $password)
            // if (password_verify($pass, $password))
            {
                // $_SESSION['USER'] = $name;

                // $msg = "in";
                // echo $msg;

                array_push($output,array(
                    'username' => $name
                ));

                // header("Location: home.php");
                // return;
            }
            else
            {
                $msg = "Wrong password";
                // $_SESSION['error'] = $msg;
                // echo $msg;

                array_push($output,array(
                    'error' => $msg
                ));

                // header("Location: login.php");
                // return;
            }
        }
        else
        {
            $msg = "User does not exist";
            // $_SESSION['error'] = $msg;
            // echo $msg;
            // header("Location: login.php");
            // return;

            array_push($output,array(
                'error' => $msg
            ));

        }
    }
    else {
        $msg = 'Both fields must be non-empty!';
        // $_SESSION['error'] = $error;
        // header('Location: login.php');
        // return;

        array_push($output,array(
            'error' => $msg
        ));
    }

}
else{
    $msg = "Unauthorized access. Log in here!";
    // $_SESSION['error'] = $msg;
    // header("Location: login.php");
    // return;

    array_push($output,array(
        'error' => $msg
    ));
}

echo json_encode($output);
?>

