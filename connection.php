<?php
session_start();
$host = 'ec2-3-222-74-92.compute-1.amazonaws.com';
$port = '5432';
$user = 'stqkdqvfdqroee'; 
$password = 'b4dfa79804017a6265ca1d476d1e860b9e8e2eb02e69db26f064b9c98528cb63';
$db   = 'dap0nofh2mh2fb';

$connection = pg_connect("host=$host port=$port dbname=$db user=$user password=$password");
// if($connection){
// echo 'Koneksi Berhasil';
// }
// else{
// echo 'Koneksi Gagal';
// }
?>