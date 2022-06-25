import { Router } from 'express'

import { ItemController } from './controllers/item'
import { OrderController } from './controllers/order'

const router = Router()

const itemController = new ItemController()
router.post('/item', itemController.create)
router.get('/item', itemController.read)
router.put('/item/:id', itemController.update)
router.delete('/item/:id', itemController.delete)

const orderController = new OrderController()
router.post('/order', orderController.create)
router.get('/order', orderController.read)

export { router }