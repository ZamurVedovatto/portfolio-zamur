import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { Octokit } from '@octokit/rest'
import { ProjectsWrapper } from 'styles/Projects'
import Modal from 'components/ModalComp'
import ImageCustom from 'components/ImageCustom'

// https://www.youtube.com/watch?v=WgJbfMxUl8A


export const getStaticProps: GetStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY
  })
  
  const repos = await octokit.request('/users/ZamurVedovatto/repos')
  const mineRepo = repos.data.filter((repo: { fork: any }) => !repo.fork)

  // mineRepo.forEach(async repo => {
  //   let langs = await octokit.request(`https://api.github.com/repos/dotnet/corefx/languages`)
  //   console.log(langs)
  // })
  
  return {
    props: {
      repos: mineRepo
    }
  }
}

const Users = ({ repos }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Zamur | Projects</title>
        <meta name="keywords" content="projects"></meta>
      </Head>
      <ProjectsWrapper>
        <ImageCustom path="/sad.png" top="40" left="35" />
        <span className="im-sorry">yeah, I really should improve it</span>
        <div className="cards-wrapper">
          {repos?.map(repo => (
            <a className="single">
              <span className="title">{repo.name}</span>
              <span className="subtitle">{repo.description}</span>
              {/* <ul>
                {
                  repo.languages_url?.map(lang => {
                    <li key={lang}>{lang}</li>
                  })
                }
              </ul> */}
              <div className="options">
                {/* <a onClick={() => setShowModal(true)} type="button">demo</a> */}
                <a target="_blank" href={repo.html_url} rel="noopener noreferrer">github</a>
              </div>
            </a>
          ))}
        </div>

      </ProjectsWrapper>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <div style={{ width: "100%", height: '80vh' }} dangerouslySetInnerHTML={{ __html: "<iframe width='100%' height='100%' src='https://zpayment-integration.herokuapp.com/' />"}} />
      </Modal>
    </>
  );
}

export default Users