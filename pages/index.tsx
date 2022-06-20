import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

const Home: NextPage = () => {
  return (
    <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
      <Head>
        <title>twitter-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9'>
         <Sidebar />
         <Feed />
         <Widget />
      </main>
    </div>
  )
}

export default Home
