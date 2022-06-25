import { Request, Response } from 'express'

import { prisma } from '../prisma'

class OrderController {
    async create(request: Request, response: Response) {
        const { note, itemsId } = request.body

        try {
            const items = await prisma.item.findMany({ select: { description: true, price: true }, where: { id: { in: itemsId } } })
            const result = await prisma.order.create({
                data: {
                    note,
                    items
                }
            })

            response.json(result)
        } catch (error) {
            response.json({ error })
        }
    }

    async read(request: Request, response: Response) {
        try {
            const orders = await prisma.order.findMany()
            response.json(orders)
        } catch (error) {
            response.json({ error })
        }
    }
}

export { OrderController }