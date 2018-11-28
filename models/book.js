const uuid = require('uuid/v4')
const author = require('../controllers/authors')
const books = [{'id': uuid(), 'name': 'Silmarillion', 'borrowed': false, 'description': 'The origin of Olorin, the wand elf.', 'author': author.getOne(0)}]

const getAll = (limit) => {
    if(limit) {
        return books.slice(0, limit)
    } else {
        return books
    }
}

const getOne = (id) => {
    const book = books.findIndex(ele => ele.id === id)

    if(book === -1)
        return null

    return books[book]
}

const create = (newBook) => {
    if(!newBook.name)
        return null

    books.push(
        {id: uuid(),
        name: newBook.name,
        borrowed: newBook.borrowed || false,
        description: newBook.description || '',
        authors: newBook.authors || []
        })
    
    return books[books.length-1]
}

const update = (updateBook, ) => {
    if(!updateBook)
        return null
    
    const book = books.findIndex(ele => ele.id === updateBook)

    if(book === -1)
        return -1

    books[book] = {
        id: updateBook,
        name: body.name || books[book].name,
        borrowed: body.borrowed || books[book].borrowed,
        description: body.description || books[book].description,
        authors: body.authors || books[book].authors
    }

    return books[book]
}

const remove = (removeBook) => {
    if(!removeBook)
        return null
    
    const book = books.findIndex(ele => ele.id === removeBook)
    
    if(book === -1)
        return -1

    const result = books.splice(book, 1)

    return result
}

module.exports = {getAll, getOne, create, update, remove}