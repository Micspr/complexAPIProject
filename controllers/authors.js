const model = require('../models/author')

const getAll = (req, res, next) => {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.params.id)

    if(data === null)
        return res.status(404).json({error: {message: 'Author not found.'}})

    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include a first and last name with your request.'}})
    
    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.params.id, req.body)

    if(data === null)
        return res.status(400).json({data: {error: 'Please include an ID to update.'}})

    if(data === -1)
        return res.status(404).json({data: {error: 'Could not find author to update.'}})
    
    res.status(200).json({data})
}

const remove = (req, res, next) => {
    const data = model.remove(req.params.id)

    if(data === null)
        return res.status(404).json({data: {error: 'Please include an ID to delete.'}})

    if(data === -1)
        return res.status(404).json({data: {error: 'Could not find author to delete.'}})
    
    res.status(200).json({data})
}

module.exports = {getAll, getOne, create, update, remove}