import { books } from "./components/array.js";
const listContainer = document.querySelector(".list-result");
function listItems() {
  for (let i = 0; i < books.length; i++) {
    // listContainer.innerHTML = "";
    console.log(books[i]);
    listContainer.innerHTML += `
    <div class="list-result">
    <h3>${books[i].title}</h3>
    <p>${books[i].isbn}<p>
    <button class="delete-btn">Delete</button
    </div>
    `;
  }
}
listItems();

trashCans.forEach(function (can) {
  can.addEventlistener("click", removeFromList);
});

const trashCans = document.querySelector(".delete-btn");
function removeFromList() {
  console.log(event);
  const deleteThisItem = event.target.dataset.item;

  const newList = books.filter(function (item) {
    if (deleteThisItem !== item) {
      return true;
    }
  });
  books = newList;
}
