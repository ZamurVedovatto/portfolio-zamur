import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-width: 25vw;

  ul {
    list-style-type: none;
    padding: 0;
    li {
      /* line-height: 2rem; */
      font-weight: 300;
      font-size: 1.25rem;
      padding-bottom: 1rem;
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

  .footer-content {
    position: fixed;
    bottom: 2rem;
  }
`