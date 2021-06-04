import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
const API_URL: string = 'https://jsonplaceholder.typicode.com/users'


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(API_URL);
  const data = await response.json()
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const response = await fetch(`${API_URL}/${id}`)
  const data = await response.json()

  return {
    props: {
      user: data
    }
  }
}

interface User {
  name: string,
  email: string,
  website?: string,
  address?: {
    city?: string
  },
}

type Props = {
  user: User
}

const UserPage: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Nextjs | {user.name}</title>
        <meta name="keywords" content="users"></meta>
      </Head>
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
    </>
  );
}

export default UserPage