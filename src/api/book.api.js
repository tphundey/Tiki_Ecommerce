import instance from "./instance";

const getBooks = function() {
    return instance.get('/books')
}

const getBookById = function(id) {
    return instance.get(`/books/${id}`)
}

const postBookById = function(id, data) {
    return instance.post(`/books/${id}`, data)
}

const deleteBook = function(id) {
    return instance.delete(`/books/${id}`)
}

export {
    getBooks,
    getBookById,
    deleteBook,
    postBookById
}