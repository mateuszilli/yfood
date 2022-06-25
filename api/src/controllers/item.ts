import { Request, Response } from 'express'

import { prisma } from '../prisma'

class ItemController {
    async create(request: Request, response: Response) {
        const { description, price } = request.body

        const result = await prisma.item.create({
            data: {
                description,
                price
            }
        })

        response.json(result)
    }

    async read(request: Request, response: Response) {
        const items = await prisma.item.findMany()
        response.json(items)
    }

    async update(request: Request, response: Response) {
        const { id } = request.params
        const { description, price } = request.body

        try {
            const post = await prisma.item.update({
                where: { id: Number(id) },
                data: {
                    description,
                    price
                }
            })

            response.json(post)
        } catch (error) {
            response.json({ error: `Item with ID ${id} does not exist in the database` })
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        const post = await prisma.item.delete({
            where: {
                id: Number(id),
            },
        })

        response.json(post)
    }
}

export { ItemController }