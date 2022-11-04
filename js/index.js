import { books } from "./components/array.js";
const listContainer = document.querySelector(".list-result");
function listItems() {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    listContainer.innerHTML += `
    <div class="list-result">
    ${books[i].title}
    <button>
    </div>
    `;
  }
}
listItems();
