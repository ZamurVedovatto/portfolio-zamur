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
      <ul>
        <li className="active">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <div className="footer-content">
        <Footer />
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;