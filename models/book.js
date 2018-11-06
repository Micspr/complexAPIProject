const uuid = require('uuid/v4')
const author = require('../controllers/authors')
const books = [{'id': uuid(), 'name': 'Silmarillion', 'borrowed': false, 'description': 'The origin of Olorin, the wand elf.', 'author': author.getOne(books.id)}]

const getAll = () => {

}

const getOne = () => {

}

const create = () => {

}

const modify = () => {

}

const remove = () => {

}

module.exports = {getAll, getOne, create, modify, remove}