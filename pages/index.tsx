import Head from 'next/head'
import Link from 'next/link'
import { HomeWrapper } from '../styles/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs | Home</title>
        <meta name="keywords" content="nextjs"></meta>
      </Head>
      <HomeWrapper>
        <h1 className="title">Homepage</h1>
        <p className="text">Fugiat eiusmod Lorem et et est aliquip ut excepteur. Nostrud est cillum et dolor officia. Qui sint est irure nostrud velit Lorem minim officia do magna est.</p>
        <p className="text">Fugiat eiusmod Lorem et et est aliquip ut excepteur. Nostrud est cillum et dolor officia. Qui sint est irure nostrud velit Lorem minim officia do magna est.</p>
        <Link href="/users">
          <a className="btn">See Listing</a>
        </Link>
      </HomeWrapper>
    </>
  )
}
