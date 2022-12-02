import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Home: NextPage = () => {
  return (
    <ParallaxProvider>

      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Afiq Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center text-center gap-10 max-h-full">
          
          <div className='fixed top-2 flex justify-between max-w-full w-full px-10 py-5 bg-base-100'>
            <p className='text-2xl font-bold font-sans'>Portfolio</p>
            <p className='text-2xl font-bold font-sans'>22-23</p>
          </div>

          <Parallax opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>
            <p className='text-5xl font-bold font-sans justify-end pt-40'>Hi! <br />I am</p>
          </Parallax>
          <Parallax
            startScroll={150}
            endScroll={400}
            translateY={[0, -30, 'easeInQuad']}
            scale={[1, 0.2, 'easeInQuad']} shouldAlwaysCompleteAnimation={true} className="sticky top-0 bg-base-100 z-50">
            <Image src="/afiq.svg" alt="Afiq Logo" width={400} height={500} />
          </Parallax>
          <Parallax
            opacity={[1, 0]}
            startScroll={150}
            endScroll={500}
            shouldAlwaysCompleteAnimation={true} >
            <p className='text-5xl font-bold font-sans italic pb-28'>Aspiring web developer</p>
          </Parallax>

          <div className='w-full max-w-7xl'>
            <Parallax
              opacity={[0, 1]}
              startScroll={300}
              endScroll={500}
              translateX={[0,30]}
              shouldAlwaysCompleteAnimation={true} >
              <p className='text-5xl font-bold font-sans items-end'>About me!</p>
            </Parallax>
            <div className='relative w-full max-w-full flex flex-row py-24'>
              <div className='w-full h-full'>
                <Parallax
                  opacity={[0, 1]}
                  translateX={[-20, 0, 'easeInOutQuad']}
                  shouldAlwaysCompleteAnimation={true}
                  className='absolute z-10 mt-11'
                >
                  <Image src="/img-bg.svg" alt="img-bg" width="600" height="500" />
                </Parallax>
                <Image src="/afiq-min.png" alt="is this really Afiq?" width="500"
                  height="1000" style={{ width: '30%', height: 'auto' }} className='absolute z-20 ml-36' />
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </ParallaxProvider>
  )

}

export default Home
/*
  < div className = 'flex flex-col gap-10 md:flex-row pb-6' >
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
          <div className="card w-80 bg-base-100 shadow-xl border-solid transition-all ease-in-out hover:scale-110">
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
        */