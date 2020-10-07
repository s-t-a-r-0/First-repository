<?php
include "conn.php";

//接收来自用户名的内容
if(isset($_POST['username']) || isset($_POST['submit'])){
    $user=$_POST['username'];
    $result=$conn->query("select * from registry where username = '$user'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}else{
    exit('非法操作');//退出，并显示内部的文字
};
if(isset($_POST['submit'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $email = $_POST['email'];
    $conn->query("insert registry value(default,'$user','$pass','$email',NOW())");
    header('location:http://localhost/js_2007/Day%2024_cookie/login/src/login.html');
}