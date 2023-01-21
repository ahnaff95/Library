"use strict";

// Function looping through array of books - Library Array ✅
// Modal Pop Up ✅
// Remove Book

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
const btnRead = document.getElementById("btnRead");
const btnRemove = document.getElementById("btnRemove");
const btnSubmit = document.getElementById("btnSubmit");
const modalPopUp = document.querySelector(".books__add--modal");

// Main Functions -- Dummy function for now

let library = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new book(title, author, pages, read);
  library.push(newBook);

  console.log(newBook);
  console.log(library);

  // library.forEach((book) => {
  //   const html = `<article class="book" id="bookContainer">
  //       <h3 class="book__title" id="bookTitle">${book.title}</h2>
  //       <p class="book__author" id="bookAuthor">${book.author}</p>
  //       <p class="book__pages" id="bookPages">${book.pages} Pages</p>
  //       <button class="book__btn book__read" id="btnRead">Read</button>
  //       <button class="book__btn book__remove" id="btnRemove">Remove</button>
  //   </article>`;

  //   bookDisplay.insertAdjacentHTML("beforeend", html);
  // });
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

function libraryLoop() {
  let newLibrary = library.slice(-1);
  // console.log(newLibrary);
  // Almost cried to get this solution.
  newLibrary.forEach((book) => {
    const html = `<article class="book" id="bookContainer">
        <h3 class="book__title" id="bookTitle">${book.title}</h2>
        <p class="book__author" id="bookAuthor">${book.author}</p>
        <p class="book__pages" id="bookPages">${book.pages} Pages</p>
        <button class="book__btn book__read" id="btnRead">Read</button>
        <button class="book__btn book__remove" id="btnRemove">Remove</button>
    </article>`;

    bookDisplay.insertAdjacentHTML("beforeend", html);
  });
}

function submitBook() {
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;
  const pages = bookPagesInput.value;
  const read = haveReadbook.checked;
  addBookToLibrary(title, author, pages, read);
  bookAuthorInput.value = bookPagesInput.value = bookTitleInput.value = "";
  haveReadbook.checked = false;
}

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault;
  // addBookToLibrary();
  openModal();
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  submitBook();
  console.log("submit");
  closeModal();
  libraryLoop();

  btnRemove.addEventListener("click", (e) => {
    console.log("remove");
  });
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".modalPopUp")) {
    closeModal();
  }
});

// Atomic Habits
// James Clear
// 289
// yes

// openModal();

// Press add book - modal pop up
