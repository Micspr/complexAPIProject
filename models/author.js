const uuid = require('uuid/v4')
const authors = [{'id': 0, 'firstName': 'Olorin', 'lastName': 'Istar'}]

const getAll = (limit) => {
    if(limit) {
        return authors.slice(0, limit)
    } else {
        return authors
    }
}

const getOne = (id) => {
    const author = authors.findIndex(ele => ele.id === id)

    if(author === -1)
        return null
    
    return authors[author]
}

const create = (newAuthor) => {
    if(!newAuthor.firstName || !newAuthor.lastName)
        return null

    authors.push(
        {id: uuid(),
        firstName: newAuthor.firstName,
        lastName: newAuthor.lastName}
    )

    return authors[authors.length-1]
}

const update = (updateAuthor, body) => {
    if(!updateAuthor)
        return null

    const author = authors.findIndex(ele => ele.id === updateAuthor)

    if(author === -1)
        return -1
    
    authors[author] = {
        id: updateAuthor,
        firstName: body.firstName || authors[author].firstName,
        lastName: body.lastName || authors[author].lastName
    }

    return authors[author]
}

const remove = (removeAuthor) => {
    if(!removeAuthor)
        return null

    const author = authors.findIndex(ele => ele.id === removeAuthor)

    if(author === -1)
        return -1

    const result = authors.splice(author, 1)

    return result
}

module.exports = {getAll, getOne, create, remove, update}