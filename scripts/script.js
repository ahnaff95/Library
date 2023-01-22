"use strict";

// Function looping through array of books - Library Array ✅
// Modal Pop Up ✅
// Remove Book
// Change Read Status
// Modal close on click outside
// Responsive site

// DOM Selectors
const bookDisplay = document.getElementById("bookDisplay");
const bookContainer = document.getElementById("bookContainer");
const books = document.querySelectorAll(".book");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookPagesInput = document.getElementById("bookPagesInput");
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const haveReadbook = document.getElementById("haveReadBook");
const btnAddBook = document.getElementById("addBook");
const btnLogin = document.getElementById("btnLogin");

const btnSubmit = document.getElementById("btnSubmit");
const btnRemove = document.createElement("div");
const btnRead = document.createElement("div");
const modalPopUp = document.querySelector(".books__add--modal");

// Main Functions
let library = [
  {
    title: "Deep Work",
    author: "Cal Newport",
    pages: 306,
    read: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 289,
    read: true,
  },
  {
    title: "Essentialism",
    author: "George McKnowen",
    pages: 306,
    read: false,
  },
];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new book(title, author, pages, read);
  library.push(newBook);
}

// function booksLoop() {
//   let newLibrary = library.slice(-1);
//   // Almost cried to get this solution.
//   newLibrary.forEach((book, i) => {
//     const html = `<article class="book" id="bookContainer">
//         <h3 class="book__title" id="bookTitle">${book.title}</h2>
//         <p class="book__author" id="bookAuthor">${book.author}</p>
//         <p class="book__pages" id="bookPages">${book.pages} Pages</p>
//         <button class="book__btn book__read">Read</button>
//         <button class="book__btn book__remove">Remove</button>
//         </article>`;

//     bookDisplay.insertAdjacentHTML("beforeend", html);
//     console.log(book, i);
//   });
// }

function bookLoop() {
  bookDisplay.innerHTML = "";
  library.forEach((book, i) => {
    btnRemove.innerHTML = `<button class="book__btn book__remove" onclick="removeBook(${i})" >Remove</button>`;

    if (book.read) {
      btnRead.innerHTML = `<button class="book__btn book__read hasRead" onclick="readBook(${i})">Read</button>`;
    } else if (!book.read) {
      btnRead.innerHTML = `<button class="book__btn book__read notRead" onclick="readBook(${i})">Read</button>`;
    }

    const libraryBook = document.createElement("div");
    libraryBook.classList.add("book");
    libraryBook.innerHTML = `
    <h3 class="book__title" id="bookTitle">${book.title}</h2>       
    <p class="book__author" id="bookAuthor">${book.author}</p>
    <p class="book__pages" id="bookPages">${book.pages} Pages</p>`;

    libraryBook.appendChild(btnRead.cloneNode(true));
    libraryBook.appendChild(btnRemove.cloneNode(true));

    bookDisplay.appendChild(libraryBook);
    // Thanks to abaker93 for the help with this specific function - truly a life saver
  });
}

function submitBook() {
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;
  const pages = bookPagesInput.value;
  const read = haveReadbook.checked;
  addBookToLibrary(title, author, pages, read);
  resetModal();
}

function removeBook(i) {
  library.splice(i, 1);
  bookLoop();
}

function readBook(i) {
  if (library[i].read === true) {
    library[i].read = false;
  } else if (library[i].read === false) {
    library[i].read = true;
  }
}

function openModal() {
  if (modalPopUp.classList.contains("hidden")) {
    modalPopUp.classList.remove("hidden");
  }
}

function closeModal() {
  if (!modalPopUp.classList.contains("hidden")) {
    modalPopUp.classList.add("hidden");
  }
}

function resetModal() {
  bookAuthorInput.value = bookPagesInput.value = bookTitleInput.value = "";
  haveReadbook.checked = false;
}

bookLoop();

// Event Handlers / Button Click Events

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  submitBook();
  closeModal();
  bookLoop();
});
