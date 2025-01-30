const {Router} = require('express')
const {getToDos,addToDo,updateToDo,deleteToDo} = require('../controllers/ToDoController.js')

const router = Router()

router.get('/', getToDos)
router.post('/add', addToDo)
router.put('/update', updateToDo)
router.delete('/delete', deleteToDo)

module.exports = router