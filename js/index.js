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
const emptyContainer = document.querySelector(".empty-error");
function createList() {
  listContainer.innerHTML = "";
  books.forEach(function (item) {
    listContainer.innerHTML += `
    <li>${item.title}  <i id="${item.isbn}" href="#">\u00D7</i> </li>

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

  if (newList.length === 0) {
    console.log("no items left");
    emptyContainer.innerHTML = `No books left :(`;
  }
  createList();
}
