const express = require('express')
const router = express.Router({mergeParams: true})
const ctrl = require('../controllers/authors')

router.get('/', ctrl.getAll)
router.get('/:authorId', ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:authorId', ctrl.update)
router.delete('/:authorId', ctrl.remove)

module.exports = router