import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amateuralia</title>
        <meta name="description" content="Plataforma para compartir recursos teatrales" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Amateuralia Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <span className="ml-3 text-xl font-bold text-indigo-600">
                    Amateuralia
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/items/new"
                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Compartir Recurso
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Amateuralia Logo"
              width={30}
              height={30}
              className="h-8 w-auto"
            />
            <p className="ml-3 text-base text-gray-400">
              &copy; 2024 Amateuralia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 