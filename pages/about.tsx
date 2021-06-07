import Head from 'next/head'
import { useState } from 'react';
import { AboutWrapper } from 'styles/About'
import Modal from 'components/ModalAbout'

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
            <span className="subtitle">Hello, I am a UI Developer based in Belo Horizonte and happy to work with something that make me grow every single project</span>
            <button onClick={() => setShowModal(true)} type="button">skills technologies tools</button>
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