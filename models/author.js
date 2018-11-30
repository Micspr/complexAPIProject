const uuid = require('uuid/v4')
const books = require('./book').books

const getAll = (limit, bookId) => {
    const book = books.find(ele => ele.id === bookId)

    if(book === undefined)
        return null

    const authorInfo = book.authors

    if(limit) {
        return authorInfo.slice(0, limit)
    } else {
        return authorInfo
    }
}

const getOne = (bookId, authorId) => {
    const book =books.find(ele => ele.id === bookId)
    
    if(book === undefined)
        return null

    const authorInfo = book.authors.findIndex(ele => ele.id === authorId)

    if(authorInfo === -1)
        return -1
    
    return book.authors[authorId]
}

const create = (bookId, newAuthor) => {
    if(!newAuthor.firstName || !newAuthor.lastName || !bookId)
        return null

    const book = books.find(ele => ele.id === bookId)
    
    if(book === undefined)
        return -1
    
    const authorInfo = book.authors

    authorInfo.push(
        {id: uuid(),
        firstName: newAuthor.firstName,
        lastName: newAuthor.lastName}
    )

    return authorInfo[authorInfo.length-1]
}

const update = (bookId, authorId, body) => {
    if(!bookId || !authorId)
        return null

    const book = books.find(ele => ele.id === bookId)
    
    if(book === undefined)
        return -1

    const authorInfo = book.authors.findIndex(ele => ele.id === authorId)

    if(authorInfo === -1)
        return -1
    
    book.authors[authorInfo] = {
        id: authorId,
        firstName: body.firstName || book.authors[authorInfo].firstName,
        lastName: body.lastName || book.authors[authorInfo].lastName
    }

    return book.authors[authorInfo]
}

const remove = (bookId, authorId) => {
    if(!bookId || !authorId)
        return null

    const book = books.find(ele => ele.id === bookId)
    
    if(book === undefined)
        return -1

    const authorInfo = book.authors.findIndex(ele => ele.id === authorId)

    if(authorInfo === -1)
        return -1

    const result = book.authors.splice(authorInfo, 1)

    return result
}

module.exports = {getAll, getOne, create, remove, update}