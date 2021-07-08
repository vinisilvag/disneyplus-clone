import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Container, LeftContainer } from './styles'

import { Avatar } from '../Avatar'

import logoImg from '../../../public/images/logo.svg'

export const AppHeader = () => {
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
      <LeftContainer>
        <Link href="/home" passHref>
          <Image src={logoImg} alt="Disney+" width={79} height={48} />
        </Link>
      </LeftContainer>

      <Avatar />
    </Container>
  )
}
