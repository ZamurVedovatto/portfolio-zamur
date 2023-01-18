import Head from 'next/head'
import { AboutWrapper } from 'styles/About'
import ImageCustom from 'components/ImageCustom'

const About = () => {
  return (
    <>
      <Head>
        <title>Zamur | Contact</title>
        <meta name="keywords" content="about"></meta>
      </Head>
      <AboutWrapper>
        <ImageCustom path="/loading.gif" top="60" left="55" />
        contact
      </AboutWrapper>
    </>
  );
}

export default About