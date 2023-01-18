import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-width: 20vw;
  padding: 7.5vh 0;
  max-height: 100vh;
  position: sticky;
  top: 0;
  border-right: 2px solid #e2e6e8;
  .logo-area {
    cursor: pointer;
    transition: .25s ease-in-out;
    &:hover {
      transform: scale(.9);
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      /* line-height: 2rem; */
      font-weight: 300;
      font-size: 1rem;
      padding-bottom: .5rem;
      text-transform: uppercase;
      &.active {
        font-weight: 500;
        a {
          color: #000 !important;
        }
      }
      a {
        color: #767676;
        text-decoration: none;
        transition: .5s ease-in-out;
        &::after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: lightgray;
          transition: width .3s;
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .footer-content {}

  @media only screen and (max-width: 320px) {}
  @media only screen and (max-width: 420px) {}
  @media only screen and (max-width: 600px) {}
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem 0;
    z-index: 1;
    ul {
      text-align: center;
      li {}
    }
    .footer-content {
      display: none;
    }
  }
  @media only screen and (max-width: 992px) {}
  @media only screen and (max-width: 1260px) {}
`