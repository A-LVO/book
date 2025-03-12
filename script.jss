// Sample book data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true },
    { id: 2, title: "1984", author: "George Orwell", isAvailable: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];

// Display books in the library
function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear previous content

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.isAvailable ? 'Available' : 'Borrowed'}</p>
            <div class="button-group">
                <button class="borrow" 
                    ${!book.isAvailable ? 'disabled' : ''} 
                    onclick="borrowBook(${book.id})">
                    Borrow
                </button>
                <button class="return" 
                    ${book.isAvailable ? 'disabled' : ''} 
                    onclick="returnBook(${book.id})">
                    Return
                </button>
            </div>
        `;

        libraryDiv.appendChild(bookDiv);
    });
}

// Borrow book function
function borrowBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && book.isAvailable) {
        book.isAvailable = false;
        alert(`You have borrowed "${book.title}"`);
        displayBooks();
    }
}

// Return book function
function returnBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && !book.isAvailable) {
        book.isAvailable = true;
        alert(`You have returned "${book.title}"`);
        displayBooks();
    }
}

// Initial book display
displayBooks();
