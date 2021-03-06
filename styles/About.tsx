import styled from 'styled-components'

export const AboutWrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F9F9FF;
  .about-img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 4rem;
    img {
      box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 2px;
    }
  }

  .about-info {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .about-info-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      max-width: 400px;
      padding: 0 2rem 0 0;
      span {
        &.title {
          font-size: 2rem;
          font-style: italic;
          font-weight: 500;
          margin-bottom: 1rem;
          letter-spacing: 10px;
          line-height: 1;
          max-width: 300px;
        }
        &.subtitle {}
      }
      button {
        margin-top: 2rem;
        padding: .5rem 1rem;
        width: 90%;
        position: relative;
        text-align: center;
        cursor: pointer;
        font-size: 24px;
        transition: 0.2s all;
        box-sizing: border-box;
        color: #000;
        background-color: transparent;
        border: 1px solid #000;
        &:hover {
          background-color: #000;
          color: white;
        }
        &:hover::before {
          left: 0;
          width: 100%;
        }
      }
    }
    .about-info-right {      
      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: flex;
          flex-direction: column;
          padding-bottom: .5rem;
          &:last-child {
            border: none;
          }
          span {
            &:first-child {
              font-size: .85rem;
            }
            &:last-child {
              font-weight: bold;
              border: none;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 320px) {}
  .about-img {
      img {}
    }
    .about-info {
      .about-info-left {
        span {
          &.title {}
          &.subtitle {}
        }
        button {
          &:hover {}
          &:hover::before {}
        }
      }
      .about-info-right {      
        ul {
          li {
            &:last-child {}
            span {
              &:first-child {}
              &:last-child {}
            }
          }
        }
      }
    }
  @media only screen and (max-width: 420px) {
    .about-img {
      img {}
    }
    .about-info {
      .about-info-left {
        span {
          &.title {}
          &.subtitle {}
        }
        button {
          &:hover {}
          &:hover::before {}
        }
      }
      .about-info-right {      
        ul {
          li {
            &:last-child {}
            span {
              &:first-child {}
              &:last-child {}
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .about-img {
      img {}
    }
    .about-info {
      .about-info-left {
        span {
          &.title {}
          &.subtitle {}
        }
        button {
          &:hover {}
          &:hover::before {}
        }
      }
      .about-info-right {      
        ul {
          li {
            &:last-child {}
            span {
              &:first-child {}
              &:last-child {}
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 2rem;
    .about-img {
      img {}
    }
    .about-info {
      width: 100%;
      flex-direction: column;
      .about-info-left {
        width: 100%;
        max-width: 100%;
        margin-bottom: 2rem;
        padding: 0;
        span {
          &.title {
            width: 100%;
            max-width: 100%;
            text-align: center;
          }
          &.subtitle {}
        }
        button {
          &:hover {}
          &:hover::before {}
        }
      }
      .about-info-right {
        width: 100%;
        max-width: 100%;
        margin-bottom: 2rem;
        ul {
          li {
            &:last-child {}
            span {
              &:first-child {}
              &:last-child {}
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {}
  @media only screen and (max-width: 1260px) {}
`