const express = require('express')
const router = express.Router()
const ctrls = require('../controllers/authors')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:id', ctrl.modify)
router.delete('/:id', ctrl.remove)

module.exports = router