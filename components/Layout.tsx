import Head from 'next/head'
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css" />
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