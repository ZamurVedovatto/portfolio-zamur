import Head from 'next/head'
import Image from 'next/image'
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
          <span>UI Developer based in Belo Horizonte and happy to be acquiring and improving skills day after day.</span>
          <div className="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/zamur/" rel="noopener noreferrer">
              <Image src="/social/_linkedin.svg" width={32} height={32} />
            </a>
            <a target="_blank" href="https://github.com/ZamurVedovatto" rel="noopener noreferrer">
              <Image src="/social/_github.svg" width={32} height={32} />
            </a>
            <a target="_blank" href="https://codepen.io/zvedovatto" rel="noopener noreferrer">
              <Image src="/social/_codepen.svg" width={32} height={32} />
            </a>
            <a target="_blank" href="https://www.instagram.com/zamurbv/" rel="noopener noreferrer">
              <Image src="/social/_instagram.svg" width={32} height={32} />
            </a>
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}
