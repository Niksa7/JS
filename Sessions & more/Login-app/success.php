<?php
    session_start();
    echo session_id();
    if(!isset($_SESSION['logged_user'])){
        header("Location: login.php");
        exit;
    }
?>

<html>

    <head>
        <title>Авторизация прошла успешно!</title>
        <meta charset="utf-8"/>
    </head>

    <body>
        <p>Привет, <?php echo $_SESSION['logged_user']; ?>, ты успешно авторизировался в системе!</p>
    </body>
</html>
