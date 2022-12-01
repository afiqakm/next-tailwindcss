import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Afiq Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center gap-10">
        <Image src="/afiq.svg" alt="Afiq Logo" width={200} height={300} />
        
        <div className='flex flex-row gap-10'>
        <a href='https://play.afiqakm.info/'>
          <div className="card w-80 bg-base-100 shadow-xl border-solid transition-all ease-in-out hover:scale-110">
            <figure className='h-100'><img src="/afiq-playground.png" alt="Afiq's Playground" className=''/></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                Afiq's Playground
              </h2>
              <p className='py-2'>A webpage to showcase my learning experience. </p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Daisyui</div>
                <div className="badge badge-outline">Reactjs</div>
              </div>
            </div>
          </div>
          </a>
          <a href='https://app.afiqakm.com/'>
          <div className="card w-80 bg-base-100 shadow-xl border-solid transition-all ease-in-out hover:scale-125">
            <figure className='h-100'><img src="/project.png" alt="Afiq's Playground" className=''/></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                Afiq's Project
              </h2>
              <p className='py-2'>A webpage to showcase my projects. </p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Flowbite</div>
                <div className="badge badge-outline">Reactjs</div>
                <div className="badge badge-outline">Firebase</div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

        </a>
      </footer>
    </div>
  )
}

export default Home
