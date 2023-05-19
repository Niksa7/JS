<?php
session_start();
$questions = $_POST['questions'];
$_SESSION['questions'] = $questions;

$questions = array(
    '1' => array(
        'question' => 'Метод протокола HTTP аналогичный методу GET, но не возращающий тело ресурса.',
        'answer' => 'HEAD',
    ),
    '2' => array(
        'question' => 'Метод протокола HTTP позволяющий получить данный идентифицированные с помощью URI.',
        'answer' => 'GET',
    ),
    '3' => array(
        'question' => 'Метод протокола HTTP для передачи на сервер такой информации, как аннотация ресурсов и т.д. Передачи большого объема данных.',
        'answer' => 'POST',
    ),
    '4' => array(
        'question' => 'Метод протокола HTTP заменяющий представление целевого ресурса, данными представленными в теле запроса.',
        'answer' => 'PUT',
    ),
    '5' => array(
        'question' => 'SMTP - это...',
        'answer' => 'сетевой протокол, предназначенный для передачи электронной почты в сетях TCP/IP.',
    ),
    '6' => array(
        'question' => 'Преимущество POST-запросов над GET-запросами.',
        'answer' => 'большая безопасность и функциональность',
    ),
    '7' => array(
        'question' => 'Какой тег в языке HTML используется для создания формы?',
        'answer' => 'FORM',
    ),
    '8' => array(
        'question' => 'Какой тег в языке HTML определяет тип и различные характеристики запрашиваемой информации?',
        'answer' => 'INPUT',
    ),
    '9' => array(
        'question' => 'Номер последней версии PHP.',
        'answer' => '8',
    ),
    '10' => array(
        'question' => 'Внимание вопрос: WEB-сервер, название известного вертолета и одноименного индейского племени.',
        'answer' => 'Apache',
    )
);

$num_correct = 0;
$wrong_answers = array();

foreach ($questions as $num => $data) {
    if (isset($_SESSION['answer'.$num]))
    {
        if ($_SESSION['answer'.$num] == $data['answer'])
            $num_correct++;
        else
        {
            $wrong_answers[$num] = array(
                'input' => $_SESSION['answer'.$num],
                'correct' => $data['answer']
            );
        }
    }
    else
    {
        $wrong_answers[$num] = array(
            'input' => 'Ничего не было введено',
            'correct' => $data['answer']
        );
    }
}

echo "<p>Правильных ответов $num_correct из ".count($questions)." вопросов.</p>";

if (!empty($wrong_answers)) {
    echo "<p>Все неправильные ответы:</p>";
    foreach ($wrong_answers as $num => $answer) {
        echo "<p>Вопрос $num: Ваш ответ: {$answer['input']}, Правильный ответ: {$answer['correct']}</p>";
    }
}

session_unset(); // очистим сессию
session_destroy();
?>
