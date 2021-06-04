import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import IUser from './../../types/User';
import { server } from './../../config';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${server}`);
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
  const response = await fetch(`${server}/${id}`)
  const data = await response.json()

  return {
    props: {
      user: data
    }
  }
}

type Props = {
  user: IUser
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