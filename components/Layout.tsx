import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="content">
        <Navbar />
        { children }
        <Footer />
      </div>
    </div>
  );
}

export default Layout;