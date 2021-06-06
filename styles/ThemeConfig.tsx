import { createGlobalStyle } from 'styled-components'
import IDefaultTheme from './../types/DefaultTheme'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle<{theme: IDefaultTheme}>`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;

    &.dark-mode {
      color: #fff;
      background: #363537;
    }
  
    &.light-mode {
      color: #363537;
      background: #fafafa;
    } 
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  .not-found {
    text-align: center;
    a {
      color: #4979ff;
      text-decoration: underline;
    }
  }

  .content {
    display: flex;
    .main-content {      
      min-height: 100vh;
      width: 100%;
    }
  }
`