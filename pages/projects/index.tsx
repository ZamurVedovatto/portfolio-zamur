import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { UsersWrapper } from '../../styles/Users'

// https://bootcamp.uxdesign.cc/embed-your-github-project-on-your-react-website-ccefacc30f62
// https://www.youtube.com/watch?v=g7udsGn51z0

export const getStaticProps: GetStaticProps = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/ZamurVedovatto/${repo}`)
  const data = await response.json()
  
  return {
    props: {
      users: data
    }
  }
}

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Zamur | Users</title>
        <meta name="keywords" content="users"></meta>
      </Head>
    <UsersWrapper>
      <h1>All users</h1>
      {users?.map(user => (
        <Link href={`/projects/${user.id}`} key={user.id}>
          <a className="single">
            <p>{user.name}</p>
          </a>
        </Link>
      ))}
    </UsersWrapper>
    </>
  );
}

export default Users