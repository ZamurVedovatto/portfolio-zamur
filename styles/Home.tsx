import styled from 'styled-components'

export const HomeWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  width: 100%;
  background-color: #FDE131;
  .avatar {
    min-width: 300px;
    min-height: 300px;
    position: relative;
    border-radius: 100%;
    .image {
      border-radius: 100%;
      background: url('/profile.jpeg');
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      animation: morph 8s ease-in-out infinite 1s;
      background-blend-mode: multiply;
      -webkit-box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
      -moz-box-shadow: inset 0 0 0 9px rgba(255, 255, 255, .3);
      box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
    }
  }

  .info {
    padding: 0 2rem;
    max-width: 50%;
    height: 180px;
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      margin: 0;
      line-height: 1;
    }
    span {
      margin: 2rem 0;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
    }
    .social-media {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      img {
        cursor: pointer;
        padding: 0 1.25rem 0 .5rem !important;
        transition: .35s ease-in-out;
        &:hover {
          transform: scale(.85);
        }
      }
    }
  }

`