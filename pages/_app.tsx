import { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from 'styles/ThemeConfig'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const theme = lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {isMounted && <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
