"use strict";

// Function looping through array of books - Library Array ✅
// Modal Pop Up
// Remove Book

// DOM Selectors
const bookDisplay = document.getElementById("bookDisplay");
const bookContainer = document.getElementById("bookContainer");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const btnAddBook = document.getElementById("addBook");
const btnLogin = document.getElementById("btnLogin");
const btnRead = document.getElementById("btnRead");
const btnRemove = document.getElementById("btnRemove");

// Main Functions -- Dummy function for now

let library = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Title of Book?");
  const author = prompt("Who is the author?");
  const pages = prompt("How many pages?");
  const read = prompt("Have you read the book?") == "yes" ? true : false;

  const newBook = new book(title, author, pages, read);
  library.push(newBook);
  console.log(newBook);
  console.log(library);
}
btnAddBook.addEventListener("click", (e) => {
  e.preventDefault;
  addBookToLibrary();
  library.forEach((book) => {
    const html = `<article class="book" id="bookContainer">
        <h3 class="book__title" id="bookTitle">${book.title}</h2>
        <p class="book__author" id="bookAuthor">${book.author}</p>
        <p class="book__pages" id="bookPages">${book.pages} Pages</p>
        <button class="book__btn book__read" id="btnRead">Read</button>
        <button class="book__btn book__remove" id="btnRemove">Remove</button>
    </article>`;

    bookDisplay.insertAdjacentHTML("beforeend", html);
  });
});

// Atomic Habits
// James Clear
// 289
// yes
