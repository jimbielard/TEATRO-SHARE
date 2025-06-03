import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import ItemCard from '../components/ItemCard'
import Image from 'next/image'
import {
  UserIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  SunIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'

const categories = [
  { 
    name: 'vestuario', 
    icon: UserIcon, 
    description: 'Vestuario y accesorios', 
    color: 'bg-pink-100 text-pink-800' 
  },
  { 
    name: 'utilería', 
    icon: SparklesIcon, 
    description: 'Utilería y props', 
    color: 'bg-purple-100 text-purple-800' 
  },
  { 
    name: 'escenografía', 
    icon: BuildingStorefrontIcon, 
    description: 'Elementos escenográficos', 
    color: 'bg-blue-100 text-blue-800' 
  },
  { 
    name: 'scripts', 
    icon: BookOpenIcon, 
    description: 'Guiones y textos', 
    color: 'bg-yellow-100 text-yellow-800' 
  },
  { 
    name: 'música', 
    icon: MusicalNoteIcon, 
    description: 'Audio y música', 
    color: 'bg-green-100 text-green-800' 
  },
  { 
    name: 'iluminación', 
    icon: SunIcon, 
    description: 'Equipos de iluminación', 
    color: 'bg-orange-100 text-orange-800' 
  },
  { 
    name: 'otros', 
    icon: Squares2X2Icon, 
    description: 'Otros recursos', 
    color: 'bg-gray-100 text-gray-800' 
  }
]

const mockItems = [
  {
    _id: '1',
    title: 'Vestido de época victoriana',
    description: 'Elegante vestido victoriano en excelente estado, perfecto para obras de época. Incluye accesorios.',
    category: 'vestuario',
    condition: 'Excelente',
    price: 0,
    images: ['/placeholder.jpg'],
    createdAt: new Date().toISOString(),
    user: {
      name: 'María Teatro',
      image: '/user-placeholder.jpg'
    }
  },
  {
    _id: '2',
    title: 'Set de utilería medieval',
    description: 'Colección completa de utilería medieval incluyendo espadas, escudos y accesorios diversos.',
    category: 'utilería',
    condition: 'Bueno',
    price: 0,
    images: ['/placeholder.jpg'],
    createdAt: new Date().toISOString(),
    user: {
      name: 'Teatro Clásico',
      image: '/user-placeholder.jpg'
    }
  },
  {
    _id: '3',
    title: 'Telón pintado bosque encantado',
    description: 'Telón de fondo pintado a mano representando un bosque mágico. Ideal para obras infantiles.',
    category: 'escenografía',
    condition: 'Nuevo',
    price: 0,
    images: ['/placeholder.jpg'],
    createdAt: new Date().toISOString(),
    user: {
      name: 'Escenografías Pro',
      image: '/user-placeholder.jpg'
    }
  }
]

export default function HomePage({ recentItems }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [])

  return (
    <Layout>
      {/* Hero Section with Search */}
      <div className="bg-black min-h-screen">
        <div 
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className={`transition-transform duration-500 ease-out transform ${
                isVisible ? 'scale-100' : 'scale-95'
              }`}>
                <Image
                  src="/images/logo.png"
                  alt="Amateuralia Logo"
                  width={120}
                  height={120}
                  className="h-32 w-auto hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            <h1 className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Amateuralia
              </span>
              <span className="block text-indigo-400 text-2xl sm:text-3xl mt-3 hover:text-indigo-300 transition-colors duration-300">
                Marketplace de recursos teatrales
              </span>
            </h1>
            <p className={`mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Encuentra todo lo que necesitas para tu próxima producción teatral. Vestuario, utilería, escenografía y más.
            </p>
            
            {/* Search Bar */}
            <div className={`mt-10 max-w-xl mx-auto transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="mt-1 relative rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                <input
                  type="text"
                  className="block w-full px-4 py-3 text-base bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-md transition-all duration-300 hover:bg-gray-800"
                  placeholder="Buscar recursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className={`sm:flex sm:items-center sm:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition-colors duration-300">
              Explorar por categorías
            </h2>
            <Link href="/items" className="hidden text-sm font-semibold text-indigo-400 hover:text-indigo-300 transform hover:translate-x-2 transition-all duration-300 sm:block">
              Ver todas las categorías<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                    selectedCategory === category.name ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${index * 100}ms`
                  }}
                >
                  <div>
                    <span className={`inline-flex p-3 rounded-lg ${category.color} ring-4 ring-gray-800 group-hover:scale-110 transform transition-transform duration-300`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <div className="bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`sm:flex sm:items-center sm:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition-colors duration-300">
              Recursos destacados
            </h2>
            <Link href="/items" className="hidden text-sm font-semibold text-indigo-400 hover:text-indigo-300 transform hover:translate-x-2 transition-all duration-300 sm:block">
              Ver todos los recursos<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentItems.map((item, index) => (
              <div
                key={item._id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 150}ms`
                }}
                className="transform hover:-translate-y-2 transition-transform duration-300"
              >
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900">
        <div className={`max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl hover:text-indigo-300 transition-colors duration-300">
            <span className="block">¿Tienes recursos para compartir?</span>
            <span className="block">Únete a nuestra comunidad teatral</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200 hover:text-indigo-100 transition-colors duration-300">
            Comparte tus recursos con otros creadores y ayuda a hacer crecer la comunidad teatral.
          </p>
          <Link
            href="/items/new"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl sm:w-auto"
          >
            Compartir recursos
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      recentItems: mockItems,
    },
  }
} 