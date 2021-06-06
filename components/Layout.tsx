import Head from 'next/head'
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="content">
        <Sidebar />
        <div className="main-content">
          { children }
        </div>
      </div>
    </div>
  );
}

export default Layout;