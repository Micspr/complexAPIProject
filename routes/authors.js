const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authors')

router.get('/:bookId', ctrl.getAll)
router.get('/:bookId/:authorId', ctrl.getOne)
router.post('/:bookId', ctrl.create)
router.put('/:bookId/:authorId', ctrl.update)
router.delete('/:bookId/:authorId', ctrl.remove)

module.exports = router