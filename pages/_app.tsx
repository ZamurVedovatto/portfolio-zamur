import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './../styles/ThemeConfig'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <button onClick={darkmode.toggle}>Switch Mode</button>
        <button onClick={darkmode.enable}>Dark Mode</button>
        <button onClick={darkmode.disable}>Light Mode</button>
        {isMounted && <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
