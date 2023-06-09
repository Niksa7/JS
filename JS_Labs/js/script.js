// Задание 1
function setDate() {
  const dateEl = document.getElementById("data_label");

  const today = new Date();
  const day = today.getDate().toLocaleString("ru-RU").padStart(2, "0");
  const month = (today.getMonth() + 1).toLocaleString("ru-RU").padStart(2, "0");
  const year = today.getFullYear().toLocaleString("ru-RU").replace(/\s/g, "");

  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const weekday = weekdays[today.getDay()];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Определяем, AM или PM
  const amOrPm = hours < 12 ? 'AM' : 'PM';

  // Конвертируем часы в 12-часовой формат
  hours = hours % 12 || 12;

  // Добавляем нуль перед минутами и секундами, если значение меньше 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Составляем строку времени в 12-часовом формате
  const timeString = hours + '/' + minutes + '/' + seconds + ' ' + amOrPm;

  dateEl.innerHTML = weekday + ", " + year + "-" + day + "-" + month + ", " + timeString;
}
setInterval(setDate, 1000);

// Задание 2
function calendar(){
  // Получаем элемент, в котором будет располагаться календарь
  const calendar = document.getElementById('calendar');

  // Создаем таблицу
  const table = document.createElement('table');

  // Добавляем название месяца
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthName = monthNames[currentMonth] + ' ' + currentYear;

  const caption = table.createCaption();
  caption.textContent = monthName;
  caption.style.fontWeight = 'bold';

  // Создаем заголовок таблицы с днями недели
  const head = table.createTHead();
  const row = head.insertRow();
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  for (let day of weekDays) {
    const cell = row.insertCell();
    cell.textContent = day;
    cell.style.fontWeight = 'bold';
  }

  // Создаем тело таблицы
  const body = table.createTBody();
      let date = new Date(currentYear, currentMonth, 1);
      while (date.getMonth() === currentMonth) {
        const row = body.insertRow();
        for (let i = 0; i < 7; i++) {
          const cell = row.insertCell();
          const day = date.getDate();
          cell.textContent = day;
          if (i === 5 || i === 6) {
            cell.classList.add('weekend'); // выделяем выходные дни
          }
          if (date.getDay() === i) {
            date.setDate(day + 1);
          }
          if (date.getFullYear() === currentDate.getFullYear() && 
              date.getMonth() === currentDate.getMonth() && 
              date.getDate() - 1 === currentDate.getDate()) {
            cell.classList.add('today'); // выделяем сегодняшний день
          }
        }
      }

  if (calendar.firstChild) {
    calendar.removeChild(calendar.firstChild);
  }

  // Добавляем таблицу календаря на страницу
  calendar.appendChild(table);
}

// Задание 3
function num_of_forms() {
  const forms = document.querySelectorAll(".form3");
  const numberOfForms = forms.length;
  document.getElementById("number-of-forms").textContent = `Количество форм на странице: ${numberOfForms}`; // Выводим количество форм в элемент с id "number-of-forms"
}

// Задание 4
function animateBlock() {
  const block = document.querySelector('.block');

  block.addEventListener('click', () => {
    setInterval(() => {
      block.style.transform = `scale(1.5) rotate(180deg)`;
    }, 50);
  });
}

// Задание 5
function addRow() {
  const cell1 = prompt("Введите содержимое для первой ячейки:");
  if (cell1 === null) {
    return;
  }
  const cell2 = prompt("Введите содержимое для второй ячейки:");
  if (cell2 === null) {
    return;
  }

  // Новую строку и добавить ячейки с введенным содержимым
  const newRow = document.createElement("tr");
  const cell1Elem = document.createElement("td");
  cell1Elem.textContent = cell1;
  newRow.appendChild(cell1Elem);
  const cell2Elem = document.createElement("td");
  cell2Elem.textContent = cell2;
  newRow.appendChild(cell2Elem);

  // Новую строку в таблицу
  const table = document.getElementById("Table");
  table.tBodies[0].appendChild(newRow);
}

function deleteRow() {
  // Получить последнюю строку таблицы
  const table = document.getElementById("Table");
  const lastRow = table.tBodies[0].lastChild;
  if (!lastRow) {
    return;
  }

  // Подтверждение удаления
  const cell1 = lastRow.firstChild.textContent;
  const cell2 = lastRow.lastChild.textContent;
  const confirmMsg = `Вы действительно хотите удалить строку: "${cell1} ${cell2}"?`;
  if (!confirm(confirmMsg)) {
    return;
  }
  table.tBodies[0].removeChild(lastRow);
}

// Задание 6

function textchanger(){

  const textFragments = [
    "Подкрадули",
    "да не умер он в конце драйва",
    "Я запрещаю вам запрещать",
  ];

  const textElements = document.querySelectorAll('#text');

  // Обработчик события для каждый элемента в блоке
  textElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
      const randomFragment = textFragments[Math.floor(Math.random() * textFragments.length)];
      element.innerText = randomFragment;
    });
  });
}

// Задание 7
function candies(){
  const menuButton = document.getElementById('menu-button');
  const menuList = document.getElementById('menu-list');
  const menuEmpty = document.getElementById('menu-empty');
  const menuItems = menuList.getElementsByTagName('li');

  function onMenuEmpty() {
    menuList.style.display = 'none'; 
    menuEmpty.style.display = 'block'; 
  }

  function onMenuItemClick(item) {
    // Анимация для исчезновения элемента
    const animation = item.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 200
      }
    );
    animation.onfinish = function() {
      item.style.display = 'none';
      const visibleItems = Array.from(menuItems).filter(item => item.style.display !== 'none');
      if (visibleItems.length === 0) {
        onMenuEmpty();
      }
    };
  }

  // Обработчик клика
  menuButton.addEventListener('click', function() {
    if (menuList.style.display === 'block') {
      menuList.style.display = 'none';
      return;
    }
    menuList.style.display = 'block';
    for (const item of menuItems) {
      item.style.display = 'block';
      item.addEventListener('click', () => onMenuItemClick(item));
    }
    menuEmpty.style.display = 'none';
  });
}

//Задание 8
function task8(){
  const image = document.getElementById("image");
    image.style.opacity = 1;
    let fadeTimeout;

    function fadeIn() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeIn, 30);
        }
    }

    function fadeOut() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity > 0.5) {
            opacity -= 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeOut, 30);
        }
    }

    image.addEventListener("mouseover", fadeOut);
    image.addEventListener("mouseout", fadeIn);
}

// Задание 9

function task9(){
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('input', function() {
    if (!emailInput.validity.valid) {
      emailInput.classList.add('invalid');
    } else {
      emailInput.classList.remove('invalid');
    }
  });
}

// Задание 10

let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
    let re = /^\w{2,}@\w{2,}\.\w{2,4}$/;
    return re.test(String(email).toLowerCase());
}

function validateDate(date) {
  let re = /^\d{2}[.]\d{2}[.]\d{4}$/;
  return re.test(String(date).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (validateCountry(emailVal)) {
        console.log('email from Columbia');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }


}