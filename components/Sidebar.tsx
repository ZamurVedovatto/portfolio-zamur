import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SidebarWrapper } from 'styles/Sidebar';
import Footer from './Footer';


export interface SidebarProps {
  
}

const Sidebar: React.SFC<SidebarProps> = () => {
  return (
    <SidebarWrapper>
      <div className="logo-area">
        <Link href="/">
          <Image width={60} height={60} src="/logo.png" />
        </Link>
      </div>
      <ul>
        <li>
        {/* <li className="active"> */}
          <Link href="/about">
            <a>About & Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Portfolio</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li> */}
      </ul>
      <div className="footer-content">
        <Footer />
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;