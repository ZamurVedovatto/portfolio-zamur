import Head from 'next/head'
import { ResumeWrapper } from 'styles/Resume'
import ImageCustom from 'components/ImageCustom'

const About = () => {
  return (
    <>
      <Head>
        <title>Zamur | Resume</title>
        <meta name="keywords" content="resume"></meta>
      </Head>
      <ResumeWrapper>
        <ImageCustom path="/loading.gif" top="60" left="55" />
        <iframe src={'/resume/resume.pdf'} width="90%" height="720px" />
      </ResumeWrapper>
    </>
  );
}

export default About