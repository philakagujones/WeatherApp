import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/altlogo.png'
import Places from '../comps/places'
import Search from '../comps/search'

export default function Home() {
  return (
   <div>
    <Head>
      <meta name="viewport" content="width=device-width"/>
      <meta charSet="utf-8"/>
      <title>Weather Watch</title>
      <meta name="description" content="Weather PWA built by Phil Akagu-Jones" />
    </Head>

    <div className='logo'>
      <Image 
      src={Logo}
      width='300'
      height='300'
      />
    </div>

    <div className='home'>
      <div className='container'>
        <Search />
        <Places />
      </div>
    </div>
   </div>
  )
}
