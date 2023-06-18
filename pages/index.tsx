import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react';
import { motion, useScroll } from "framer-motion";

const Home: NextPage = () => {

  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Afiq Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center gap-10">
        <motion.div
          animate={{
            x: isClick ? 0 : '250%',
            y: isClick ? 0 : '100%',
            scale: isClick? 1: 0.5,
          }}
          style={{cursor: 'pointer'}}
          onClick={() => setIsClick(!isClick)}
        >
          <Image src="/afiq.svg" alt="Afiq Logo" width={300} height={300} />
        </motion.div>
      </main>
    </div>
  )
}

export default Home
