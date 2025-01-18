//Data structures for Books and Users - Structures
let books = [
    {title: "To  kill a Mockingbird", author: "Harper Lee", isAvailable: true},
    {title: "1984", author: "Herman Melville", isAvailable: true},
    {title: "Moby Dick", author: "F.Scott Fitzgerald", isavailablbe: true}
];
let users = [
    {name: "Alice", borrowedBooks: []},
    {name: "Mr. Smith", borrowedBooks: []}
];

//Function to display available books...
function showAvailableBooks(){
    const availableBooks = books.filter(book => book.isAvailable);
    if(availableBooks.length > 0){
        console.log("Available Books:");
        availableBooks.forEach(book => console.log(- `${book.title} by ${book.author}`));
    }else{
        console.log("No books are available in the library.");
    }
}

//function to borrow a book
function borrowBook(userName, bookTitle){
    const user = users.find(user => user.name === userName);
    const book = books.find(book => book.title === bookTitle);

    if(!user){
        console.log(`User ${userName} not found.`);
        return;
    }
    if(!book){
        console.log(`Book ${bookTitle} not found.`);
        return;
    }

    if(book.isAvailable){
        if(user.borrowedBooks.length < 3){
            user.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log(`${userName} borrowed ${bookTitle} by ${book.author}`);
        }else{
            console.log(`User ${userName} cannot borrow more than 3 books.`)
        }
    }else{
        console.log(`Sorry, ${bookTitle} is not available`);
    }
}

//Function to retrun books
function returnBook(userName, bookTitle){
    const user = users.find(user => userName === userName);
    const book = books.find(book => bookTitle === bookTitle);

    if(!user){
        console.log(`User ${userName} not found.`);
        return;
    }
    if(!book){
        console.log(`Book ${bookTitle} not found.`);
        return;
    }

    const bookIndex = user.borrowedBooks.indexOf(book);
    if(bookIndex !== -1){
        user.borrowedBooks.splice(bookIndex, 1);
        book.isAvailable = true;
        console.log(`${userName} returned ${bookTitle}`);
    }else{
        console.log(`${userName} did not borrow ${bookTitle}.`);
    }
}

//Function to register a new user 
function addUser(userName){
    if(users.find(user => userName === userName)){
        console.log(`User ${userName} is already existing`)
    }else{
        users.push({name: userName, borrowedBooks: []});
        console.log(`User ${userName} added to the library`);
    }
}