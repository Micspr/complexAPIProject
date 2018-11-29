const model = require('../models/book')

const getAll = (req, res, next) => {
    console.log('do the thing')
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).send({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.params.id)

    if(data === null)
        return res.status(404).json({error: {message: 'Book with that ID not found.'}})

    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include a book name.'}})

    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.params.id, req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include an ID to update.'}})

    if(data === null)
        return res.status(404).json({data: {error: 'Could not find a book with that ID.'}})

    res.status(200).json({data})
}

const remove = (req, res, next) => {
    const data = model.remove(req.params.id)

    if(data === null)
        return res.status(400).json({data: {error: 'Please provide a valid ID.'}})

    if(data === -1)
        return res.status(404).json({data: {error: 'Could not find a book with that ID.'}})

    res.status(200).json({data})
}

module.exports = {getAll, getOne, create, update, remove}