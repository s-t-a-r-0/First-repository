<?php
include "conn.php";
if(isset($_POST['submit'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $email = $_POST['email'];
    $conn->query("insert registry value(default,'$user','$pass','$email',NOW())");
    header('location:http://localhost/First-repository/xianheng/src/login.html');
};