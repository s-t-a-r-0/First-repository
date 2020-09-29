<?php

include "conn.php";

if(isset($_GET['movesid'])){
    $sid = $_GET['movesid'];
    $result = $conn->query("select * from taobaogoods where sid=$sid");
    echo json_encode($result->fetch_assoc());
}else{
    echo '非法操作';
};