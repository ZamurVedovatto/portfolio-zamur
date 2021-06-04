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
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', sans-serif;
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

  a {
    color: #333;
    text-decoration: none;
  }

  .content {
    max-width: 960px;
    margin: 0 auto;
  }

  nav {
    margin: 10px auto 80px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 1px solid #ddd;
    a {
      margin-left: 12px;
    }
    .logo {
      margin-right: auto;
    }
  }

  footer {
    display: block;
    text-align: center;
    padding: 30px 0;
    margin-top: 60px;
    color: #777;
    border-top: 1px solid #eaeaea;
  }

  .not-found {
    text-align: center;
    a {
      color: #4979ff;
      text-decoration: underline;
    }
  }
`