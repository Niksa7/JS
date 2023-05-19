<?php
session_start();
?>

<link rel="stylesheet" type="text/css" href="style.css">

<p class="question">Вопрос 1:</p>
<p class="text">Метод протокола HTTP аналогичный методу GET, но не возращающий тело ресурса.</p>
<form action="answer2.php" method="post">
  <input class="answer" type="text" name="answer1"/>
  <input class="submit" type="submit"/>
</form>
