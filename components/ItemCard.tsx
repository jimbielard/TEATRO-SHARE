import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

interface ItemCardProps {
  item: {
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
  }
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group relative">
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
        <Image
          src={item.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={item.title}
          fill
          className="object-cover object-center"
        />
        {/* Etiqueta de condición */}
        {item.condition && (
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {item.condition}
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <Link href={`/items/${item._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {item.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src={item.user.image || 'https://via.placeholder.com/40x40?text=User'}
                alt={item.user.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-500">{item.user.name}</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {formatDistanceToNow(new Date(item.createdAt), {
            addSuffix: true,
            locale: es
          })}
        </div>
      </div>
    </div>
  )
} 