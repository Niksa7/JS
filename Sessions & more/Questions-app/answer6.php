<?php
session_start();
$answer5 = $_POST['answer5'];
$_SESSION['answer5'] = $answer5;
?>

<link rel="stylesheet" type="text/css" href="style.css">

<p class="question">Вопрос 6:</p>
<p class="text">Преимущество POST-запросов над GET-запросами.</p>
<form action="answer7.php" method="post">
  <input class="answer" type="text" name="answer6"/>
  <input class="submit" type="submit"/>
</form>
