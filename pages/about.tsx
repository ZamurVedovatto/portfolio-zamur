import Head from 'next/head'
import { useState } from 'react'
import { AboutWrapper } from 'styles/About'
import Modal from 'components/ModalComp'

const About = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Zamur | About</title>
        <meta name="keywords" content="about"></meta>
      </Head>
      <AboutWrapper>
        {/* <div className="about-img">
          <img src="/about.jpg" />
        </div> */}
        <div className="about-info">
          <div className="about-info-left">
            <span className="title">Zamur & UI Developer</span>
            <span className="subtitle">
              Hello. I'm Zamur B. Vedovatto, currently working as UI Developer on Symplicity Brazil.
            </span>
            <span className="subtitle">
              4+ years of experience with web development and improvement in Javascript and its component-based frameworks.
            </span>
            <span className="subtitle">
              BSc in Information Systems at PUC Minas.
            </span>
            <span className="subtitle">
              Front end experience in React.js, React Native, Next.js, Angular, Aurelia and SASS.
            </span>
            <span className="subtitle">
              Back end experience in Node.js, Django, Mongodb and GraphQL.
            </span>
            {/* <button onClick={() => setShowModal(true)} type="button">skills technologies tools</button> */}
          </div>
          <div className="about-info-right">
            <ul>
              <li>
                <span>Birthday</span>
                <span>08.08.1986</span>
              </li>
              <li>
                <span>Location</span>
                <span>Belo Horizonte MG - Brazil</span>
              </li>
              <li>
                <span>Email</span>
                <span>vedovatto@gmail.com</span>
              </li>
              <li>
                <span>Study</span>
                <span>Information Systems on PUC Minas</span>
              </li>
            </ul>
          </div>
        </div>
      </AboutWrapper>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <p>Modal</p>
      </Modal>
    </>
  );
}

export default About