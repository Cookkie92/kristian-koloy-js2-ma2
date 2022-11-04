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
  //   for (let i = 0; i < books.length; i++) {
  //     console.log(books[i]);
  //     listContainer.innerHTML += `
  //     <li><span>${books[i].title}</span>  <i href="#">Remove</i> </li>

  // //     `;
  //   }
  listContainer.innerHTML = "";
  books.forEach(function (item) {
    listContainer.innerHTML += `
    <li ><span>${item.title}</span>  <i id="${item.isbn}" href="#">Remove</i> </li>

     `;
  });
  const trashCans = document.querySelectorAll("i");
  trashCans.forEach(function (can) {
    can.addEventListener("click", removeFromList);
  });
}
createList();

function removeFromList() {
  console.log(event);
  const deleteItem = event.target;
  console.log(deleteItem.id);
  const newList = books.filter(function (item) {
    if (deleteItem.id !== item.isbn) {
      console.log();
      return true;
    }
  });

  books = newList;

  createList();
}
