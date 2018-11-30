const model = require('../models/author')

const getAll = (req, res, next) => {
    const limit = req.query.limit
    const data = model.getAll(limit, req.params.bookId)
    
    if(data === null)
        res.status(404).json({error: {message: 'Book not found.'}})

    res.status(200).json({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.params.bookId, req.params.authorId)

    if(data === null)
        return res.status(404).json({error: {message: 'Book not found.'}})

    if(data === -1)
        return res.status(404).json({error: {message: 'Author not found.'}})

    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.params.bookId, req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include a first and last name with your request as well as a book ID.'}})
    
    if(data === -1)
        return res.status(404).json({data: {error: 'Book not found.'}})

    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.params.bookId, req.params.authorId, req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include a book and author ID to update.'}})

    if(data === -1)
        return res.status(404).json({data: {error: 'Could not find a book or author to update.'}})
    
    res.status(200).json({data})
}

const remove = (req, res, next) => {
    console.log('Made it.')
    const data = model.remove(req.params.bookId, req.params.authorId)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include a book and author ID to delete.'}})

    if(data === -1)
        return res.status(404).json({data: {error: 'Could not find author to delete.'}})
    
    res.status(200).json({data})
}

module.exports = {getAll, getOne, create, update, remove}