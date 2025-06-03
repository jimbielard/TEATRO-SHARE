import React, { useState } from 'react'
import { useRouter } from 'next/router'

const categories = [
  'todos',
  'vestuario',
  'utilería',
  'escenografía',
  'scripts',
  'música',
  'iluminación',
  'otros'
]

export default function SearchBar() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('todos')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams()
    
    if (searchTerm) {
      query.set('q', searchTerm)
    }
    if (category && category !== 'todos') {
      query.set('category', category)
    }
    
    router.push(`/items${query.toString() ? `?${query.toString()}` : ''}`)
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <input
            type="text"
            id="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Buscar por título, descripción o etiquetas..."
          />
        </div>
        <div className="sm:w-48">
          <label htmlFor="category" className="sr-only">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Buscar
        </button>
      </div>
    </form>
  )
} 