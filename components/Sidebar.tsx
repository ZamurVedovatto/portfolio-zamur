import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SidebarWrapper } from 'styles/Sidebar';
import Footer from './Footer';


export interface SidebarProps {
  
}
const Sidebar: FC<SidebarProps> = () => {
// const Sidebar: React.SFC<SidebarProps> = () => {
  return (
    <SidebarWrapper>
      <div className="logo-area">
        <Link href="/">
          <Image width={48} height={48} src="/logo.png" alt="Alt" />
        </Link>
      </div>
      <ul>
        <li>
        {/* <li className="active"> */}
          <Link href="/about">
            About & Skills
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume">
            Resume
          </Link>
        </li>
        {/* <li>
          <Link href="/contact">
            Contact
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