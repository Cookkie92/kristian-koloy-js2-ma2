// import { books } from "./components/array.js";

let books = [
  {
    isbn: "1600506460320",
    title: "Great book",
  },
  {
    isbn: "1600506460373",
    title: "Ok book",
  },
  {
    isbn: "1600506460521",
    title: "Bad book",
  },
  {
    isbn: "1600506460456",
    title: "Terrible book",
  },
];

const listContainer = document.querySelector(".list-result");
const button = document.querySelector("button");
function createList() {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    listContainer.innerHTML += `
    <li><span>${books[i].title}</span>  <i href="#">Remove</i> </li>

    `;
  }
  const trashCans = document.querySelectorAll("li i");
  trashCans.forEach(function (can) {
    can.addEventListener("click", removeFromList);
  });
}
createList();

function removeFromList() {
  console.log(event);
  const deleteItem = event.target;

  const newList = books.filter(function (item) {
    if (deleteItem !== item) {
      return true;
    }
  });

  books = newList;

  createList();
}

// deleteButton.addEventListener("click", function () {
//   listContainer.style.background = "lightblue";
// });

// const liItem = document.querySelectorAll("li");
// liItem.forEach(function () {
//   deleteButton.addEventlistener("click", removeFromList);
//   console.log(event);
// });

// function removeFromList() {
//   console.log(event);
//   const deleteThisItem = event.target.dataset.item;

//   const newList = books.filter(function (item) {
//     if (deleteThisItem !== item) {
//       return true;
//     }
//   });
//   books = newList;
// }
