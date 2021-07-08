import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/globals/global'
import { theme } from '../styles/globals/theme'

import { AuthProvider } from '../contexts/auth'

import NextProgressBar from 'nextjs-progressbar'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../services/firebase'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NextProgressBar
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <ToastContainer />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
