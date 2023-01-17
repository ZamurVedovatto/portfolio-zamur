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
              Front-end Developer with 6+ years of experience in developing and implementing user-centric web solutions.
            </span>
            <span className="subtitle">
              Proven experience in delivering high-quality web projects using Agile practices in working remotely for more than 4 years.
            </span>
            <span className="subtitle">
              Skilled in project management, with experience leading small teams and ensuring timely delivery of projects.
            </span>
            <span className="subtitle">
              Detail-oriented and able to learn and adapt quickly to new technologies.
            </span>
            <span className="subtitle">
              Holds a BSc in Information Systems from PUC Minas and currently working as a UI Developer at Symplicity, where I have been able to apply my skills and knowledge to deliver successful projects for clients.
            </span>
            <span className="subtitle">
              Strong expertise in React.js, Next.js, Angular, Aurelia, and SASS, as well as experience with Node.js, Django, MongoDB, and GraphQL for back-end development.
            </span>
          </div>
          <div className="about-info-right">
            <ul>
              {/* <li>
                <span>Birthday</span>
                <span>08.08.1986</span>
              </li> */}
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
                <span>BSc Information Systems on PUC Minas</span>
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