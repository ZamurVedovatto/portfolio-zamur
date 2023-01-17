import Head from 'next/head'
import { ResumeWrapper } from 'styles/Resume'

const About = () => {
  return (
    <>
      <Head>
        <title>Zamur | Resume</title>
        <meta name="keywords" content="resume"></meta>
      </Head>
      <ResumeWrapper>
        <iframe src={'/resume/resume.pdf'} width="90%" height="720px" />
      </ResumeWrapper>
    </>
  );
}

export default About