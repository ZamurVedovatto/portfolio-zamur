import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { server } from './../../config';
import { UsersWrapper } from '../../styles/Users'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${server}`)
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