// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let valid = true;
//     const fields = {
//       fullName: {
//         element: document.getElementById("fullName"),
//         regex:
//           /^[А-Яа-яЁёІіЇї]{2,}\s+[А-Яа-яЁёІіЇї]{1}\.\s?[А-Яа-яЁёІіЇї]{1}\.$/,
//       },
//       faculty: {
//         element: document.getElementById("faculty"),
//         regex: /^[А-Яа-яЁёІіЇї]{3,}$/,
//       },
//       birthDate: {
//         element: document.getElementById("birthDate"),
//         regex: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/,
//         validate: function (value) {
//           const parts = value.split(".");
//           const day = parseInt(parts[0], 10);
//           const month = parseInt(parts[1], 10);
//           const year = parseInt(parts[2], 10);
//           const date = new Date(year, month - 1, day);
//           return (
//             date.getFullYear() === year &&
//             date.getMonth() === month - 1 &&
//             date.getDate() === day
//           );
//         },
//       },
//       address: {
//         element: document.getElementById("address"),
//         regex: /.+/,
//       },
//       email: {
//         element: document.getElementById("email"),
//         regex: /^[\w-]+@[\w-]+\.[a-z]{2,}$/,
//       },
//     };

//     for (let field in fields) {
//       fields[field].element.classList.remove("highlight");
//     }

//     for (let field in fields) {
//       const { element, regex, validate } = fields[field];
//       if (
//         !regex.test(element.value) ||
//         (validate && !validate(element.value))
//       ) {
//         valid = false;
//         element.classList.add("highlight");
//       }
//     }

//     if (valid) {
//       let formData = {};
//       const infoTableBody = document.getElementById("infoTableBody");

//       for (let field in fields) {
//         formData[field] = fields[field].element.value;
//         const row = document.createElement("tr");
//         row.innerHTML = `<td>${field}</td><td>${formData[field]}</td>`;
//         infoTableBody.appendChild(row);
//       }

//       const emptyRow = document.createElement("tr");
//       emptyRow.innerHTML = '<td colspan="2">&nbsp;</td>'; // Порожній рядок
//       infoTableBody.appendChild(emptyRow);

//       for (let field in fields) {
//         fields[field].element.value = "";
//       }
//     } else {
//       alert("Будь ласка, виправте помилки у формі.");
//     }
//   });

// document.getElementById("birthDate").addEventListener("keypress", function (e) {
//   if (!/[0-9.]/.test(e.key)) {
//     e.preventDefault();
//   }
// });

// document.getElementById("address").addEventListener("keypress", function (e) {

// });

// document.getElementById("email").addEventListener("keypress", function (e) {
//   if (!/[A-Za-z0-9@._-]/.test(e.key)) {
//     e.preventDefault();
//   }
// });

// document.getElementById("fullName").addEventListener("keypress", function (e) {
//   if (!/[А-Яа-яЁёІіЇї ]/.test(e.key) && e.key !== ".") {
//     e.preventDefault();
//   }
// });

// document.getElementById("faculty").addEventListener("keypress", function (e) {
//   if (!/[А-Яа-яЁёІіЇї]/.test(e.key)) {
//     e.preventDefault();
//   }
// });

// Функція для створення таблиці 6x6
function createTable() {
  const table = document.getElementById("colorTable");
  let number = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      const cell = document.createElement("td");
      cell.textContent = number;
      cell.dataset.number = number; // Зберігаємо номер клітинки
      number++;

      // Додати обробники подій
      cell.addEventListener("mouseover", changeColorOnHover);
      cell.addEventListener("click", changeColorOnClick);
      cell.addEventListener("dblclick", changeColorOnDoubleClick);

      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

// Зміна кольору при наведенні
function changeColorOnHover() {
  if (this.textContent !== "5") {
    // Перевірка на номер клітинки
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
  }
}

// Зміна кольору при кліку (пустий функціонал)
function changeColorOnClick() {
  // Не змінюємо колір для клітинки "5"
}

// Зміна кольору при подвійному кліку
function changeColorOnDoubleClick() {
  const cells = document.querySelectorAll("#colorTable td");
  cells.forEach((cell) => {
    if (cell.textContent !== "5") {
      // Змінюємо колір для всіх, крім "5"
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      cell.style.backgroundColor = randomColor;
    }
  });
}

// Створюємо таблицю при завантаженні сторінки
window.onload = createTable;
