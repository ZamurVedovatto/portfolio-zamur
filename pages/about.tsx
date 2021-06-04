import Head from 'next/head'
import { AboutWrapper } from './../styles/About'

const About = () => {
  return (
    <>
      <Head>
        <title>Nextjs | About</title>
        <meta name="keywords" content="about"></meta>
      </Head>
      <AboutWrapper>
        about
      </AboutWrapper>
    </>
  );
}

export default About