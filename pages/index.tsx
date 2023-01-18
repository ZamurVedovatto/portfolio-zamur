import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'next/link'

import { HomeWrapper } from 'styles/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zamur | Home</title>
        <meta name="keywords" content="nextjs"></meta>
      </Head>
      <HomeWrapper>
        <div className="avatar">
          <div className="image" />
        </div>
        <div className="info">
          <h2>Zamur Vedovatto</h2>
          <span>I'm a UI Developer based in Belo Horizonte (Brazil) who thinks that every day is a new opportunity to acquire and improve my skills. So watch out world, because I'm coming for that top spot in the front end game...or at least trying not to fall too far behind.</span>
          <div className="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/zamur/">
              <Image src="/social/_linkedin.svg" width={32} height={32} rel="noopener noreferrer" />
            </a>
            <a target="_blank" href="https://github.com/ZamurVedovatto" rel="noopener noreferrer">
              <Image src="/social/_github.svg" width={32} height={32} alt="alt" />
            </a>
            <a target="_blank" href="https://codepen.io/zvedovatto" rel="noopener noreferrer">
              <Image src="/social/_codepen.svg" width={32} height={32} alt="alt" />
            </a>
            <a target="_blank" href="https://www.instagram.com/zamurbv/" rel="noopener noreferrer">
              <Image src="/social/_instagram.svg" width={32} height={32} alt="alt" />
            </a>
            <a target="_blank" href="https://medium.com/@vedovatto/" rel="noopener noreferrer">
              <Image src="/social/_medium.svg" width={32} height={32} alt="alt" />
            </a>
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}
