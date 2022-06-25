import { Request, Response } from 'express'

import { prisma } from '../prisma'

class OrderController {
    async create(request: Request, response: Response) {
        const { note, itemsId } = request.body

        const items = await prisma.item.findMany({ select: { description: true, price: true }, where: { id: { in: itemsId } } })

        const result = await prisma.order.create({
            data: {
                note,
                items
            }
        })

        response.json(result)
    }

    async read(request: Request, response: Response) {
        const orders = await prisma.order.findMany()
        response.json(orders)
    }
}

export { OrderController }