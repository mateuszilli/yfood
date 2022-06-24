import { Router, Request, Response } from 'express'

import { prisma } from './prisma'

const router = Router();

router.get('/item', async (_, res: Response) => {
    const items = await prisma.item.findMany()
    res.json(items)
})

router.post('/item', async (req: Request, res: Response) => {
    const { description, price } = req.body

    const result = await prisma.item.create({
        data: {
            description,
            price
        }
    })

    res.json(result)
})

router.put('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { description, price } = req.body

    try {
        const post = await prisma.item.update({
            where: { id: Number(id) },
            data: {
                description,
                price
            }
        })

        res.json(post)
    } catch (error) {
        res.json({ error: `Item with ID ${id} does not exist in the database` })
    }
})

router.delete('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params

    const post = await prisma.item.delete({
        where: {
            id: Number(id),
        },
    })

    res.json(post)
})

router.post('/order', async (req: Request, res: Response) => {
    const { note, itemsId } = req.body

    const items = await prisma.item.findMany({ select: { description: true, price: true }, where: { id: { in: itemsId } } })

    const result = await prisma.order.create({
        data: {
            note,
            items
        }
    })

    res.json(result)
})

export { router }