<?php
session_start();

if (isset($_SESSION['failed_login_attempts']) && $_SESSION['failed_login_attempts'] >= 5) { // 5 ошибок при вводе данных и все пропало на 6 минут!!!!
    $remaining_time = 60 - (time() - $_SESSION['last_failed_attempt']);
    if ($remaining_time > 0) {
        echo "Вы не смогли войти в аккаунт за отведенное кол-во попыток. Придется подождать $remaining_time секунд.";
        exit;
    } else {
        $_SESSION['failed_login_attempts'] = 0;
    }
}

if (isset($_POST['Submit'])) {
    if ($_POST['user_name'] == "Nekitosina" && $_POST['user_pass'] == "123") { // Логин: Nekitosina; пароль: 123
        $_SESSION['logged_user'] = $_POST['user_name'];
        header("Location: success.php");
        exit;
    } else {
        $_SESSION['failed_login_attempts'] = isset($_SESSION['failed_login_attempts']) ? $_SESSION['failed_login_attempts'] + 1 : 1;
        $_SESSION['last_failed_attempt'] = time();

        if ($_SESSION['failed_login_attempts'] >= 3) {
            echo "Вы использовали все попытки входа. Попробуйте еще раз через 1 минуту.";
            exit;
        } else {
            echo "Вы ввели неверный пароль!";
        }
    }
}
?>

<link rel="stylesheet" type="text/css" href="style.css">

<html>
    <head>
        <title>Введите логин и пароль аккаунта</title>
        <meta charset="utf-8"/>
    </head>

    <body>
    <h1>Окно авторизации</h1>
    <div class="container">
        <form action="login.php" method="post">

            <?php if (isset($_SESSION['failed_login_attempts'])): ?>
            <p>Осталось попыток: <?php echo 5 - $_SESSION['failed_login_attempts'];?></p>
            <?php endif;?>

            <label class="text" for="user_name">Имя пользователя:</label>
            <input class="txbox" type="text" id="user_name" name="user_name"><br>
            <label class="text" for="user_pass">Пароль:</label>
            <input class="txbox" type="password" id="user_pass" name="user_pass"><br>
            <input class="submit" type="submit" name="Submit" value="Войти">
        </form>
    </div>
    </body>
</html>
