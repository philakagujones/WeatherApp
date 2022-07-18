import Head from 'next/head'

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

    <div className='home'></div>
    <div className='container'></div>

    <h1>HELLO WORLD</h1>
   </div>
  )
}
