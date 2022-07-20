import Head from 'next/head'
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
      <meta name="theme-color" content="currentColor" />
    </Head>

    <div className='home'>
      <div className='container'>
        <Search />
        <Places />
      </div>
    </div>
   </div>
  )
}
