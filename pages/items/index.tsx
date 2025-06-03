import React from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import ItemCard from '../../components/ItemCard'
import dbConnect from '../../utils/mongodb'
import Item from '../../models/Item'

interface ItemsPageProps {
  items: Array<{
    _id: string
    title: string
    description: string
    category: string
    condition?: string
    price?: number
    images: string[]
    createdAt: string
    user: {
      name: string
      image?: string
    }
  }>
}

export default function ItemsPage({ items }: ItemsPageProps) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Explorar Recursos Teatrales
          </h1>
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No se encontraron resultados
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Intenta con otros términos de búsqueda o categorías
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await dbConnect()

  const { q, category } = query
  const searchQuery: any = {}

  if (q) {
    searchQuery.$text = { $search: q as string }
  }

  if (category && category !== 'todos') {
    searchQuery.category = category
  }

  const items = await Item.find(searchQuery)
    .sort({ createdAt: -1 })
    .populate('user', 'name image')
    .lean()

  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  }
} 