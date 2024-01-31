import { Router } from 'express'
import { addTodo, deleteTodo, getTodos, updateTodoStatus } from '../controllers/todos'

const router: Router = Router()

router.get('/todos', getTodos)

router.post('/todo', addTodo)

router.put('/todo/:id', updateTodoStatus)

router.delete('/todo/:id', deleteTodo)

export default router
