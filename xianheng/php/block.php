<?php
include 'conn.php';
 header('Access-Control-Allow-Origin:*');//跨域访问的域名，*表示所有
    header('Access-Control-Allow-Method:POST,GET');//跨域支持的请求方式。
$result = $conn->query("select * from xianheng");//$result:记录集，结果集。
$arr = Array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
}
echo json_encode($arr);