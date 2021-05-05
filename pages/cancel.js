import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 flex justify-center items-center text-center min-h-screen py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <Head>
        <title>Recurrente Sample</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Checkout Cancelado.</span>
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
      </div>
    </div>
  )
}
