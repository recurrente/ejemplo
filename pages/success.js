import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [checkout, setCheckout] = useState();

  const getCheckout = async () => {
    const checkoutId = (new URL(document.location)).searchParams.get("checkout_id")
    const res = await fetch(`${window.origin}/api/checkouts/${checkoutId}`)
    const checkout = await res.json();
    setCheckout(JSON.stringify(checkout, null, 2))
  }

  useEffect(() => {
    getCheckout()
  })

  return (
    <div className="bg-gray-50 flex justify-center items-center text-center min-h-screen py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <Head>
        <title>Recurrente Sample</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">¡Checkout exitoso!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Empieza de nuevo
          </a>
          </div>
        </div>

        <div className="mt-10 text-left">
          <p className="text-gray-500 mb-1">
            Respuesta del Checkouts API:
          </p>
          <code className="bg-gray-200 text-xs w-full p-4 block whitespace-pre overflow-x-auto rounded-md">
            {checkout}
          </code>
        </div>
      </div>
    </div>
  )
}
