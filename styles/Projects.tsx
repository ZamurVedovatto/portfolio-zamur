import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    .single {
      width: auto;
      min-width: 30%;
      background: #fff;
      border-left: 8px solid #fff;
      transition: .35s ease-in-out;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 1rem;
      margin: .25rem;
      box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
      border: 1px solid white;
      &:nth-child(n) {
        background-color: white;
      }
      &:hover {
        transform: scale(1);
        .options {
          display: flex;
        }
      }
      a {
        line-height: 1;
        text-decoration: none;
        &.title {
          text-transform: uppercase;
        }
        &.subtitle {
          padding: .25rem 0;
        }
        }
        ul {
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          margin: .15rem;
          padding: 0;
          li {
            font-size: .75rem;
            background-color: lightgray;
            margin: .15rem;
            padding: .25rem .5rem;
            border-radius: 4px;
            transition: .25s ease-in-out;
          }
        }
      .options {
        width: 100%;
        height: 100%;
        /* display: flex; */
        position: absolute;
        background: #ffffffe0;
        justify-content: center;
        align-items: center;
        display: none;
        transition: .75s ease-in-out;
        background-color: #222222eb;
        color: white;
        
        a {
          color: white;
          text-decoration: none;
          padding: 1rem;
          transition: .25s ease-in-out;
          margin: .25rem;
          &:hover {
            cursor: pointer;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`