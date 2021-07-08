import Image from 'next/image'

import { Container } from './styles'

import logoImg from '../../../public/images/logo.svg'

export const Footer = () => {
  return (
    <Container>
      <Image src={logoImg} alt="Disney+" width={80} height={44} />
    </Container>
  )
}
