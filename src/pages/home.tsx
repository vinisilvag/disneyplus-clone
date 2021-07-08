import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { parseCookies } from 'nookies'

import { Container } from '../styles/app.styles'

import { AppHeader } from '../components/AppHeader'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Disney+ | Filmes e séries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'disneyplus-clone.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
