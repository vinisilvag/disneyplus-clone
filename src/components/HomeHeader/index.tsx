import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Container, RightContainer } from './styles'

import { Button } from '../Button'

import logoImg from '../../../public/images/logo.svg'

export const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleChangeBackgroundColor = () => {
    if (window.scrollY <= 0) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBackgroundColor)

    return () => {
      window.removeEventListener('scroll', handleChangeBackgroundColor)
    }
  }, [])

  return (
    <Container scrolled={scrolled}>
      <Image src={logoImg} alt="Disney+" width={80} height={44} />

      <RightContainer>
        <Link href="/register" passHref>
          <Button>Sign up now</Button>
        </Link>

        <Link href="/login" passHref>
          <Button isOutlined>Log in</Button>
        </Link>
      </RightContainer>
    </Container>
  )
}
