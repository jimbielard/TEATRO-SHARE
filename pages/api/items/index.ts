import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import dbConnect from '../../../utils/mongodb'
import Item from '../../../models/Item'

interface ExtendedSession {
  user: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req }) as ExtendedSession | null

  if (!session) {
    return res.status(401).json({ error: 'No autorizado' })
  }

  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const items = await Item.find()
          .sort({ createdAt: -1 })
          .populate('user', 'name image')
          .lean()
        res.status(200).json(items)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los items' })
      }
      break

    case 'POST':
      try {
        const item = await Item.create({
          ...req.body,
          user: session.user.id,
          createdAt: new Date()
        })
        res.status(201).json(item)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el item' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} 