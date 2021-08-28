import Image from 'next/image'
import Link from 'next/link'

import { Container, LinkRow, LinkItem, Description, Copyright } from './styles'

import logoImg from '../../../public/images/logo.svg'

export const Footer = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Image src={logoImg} alt="Disney+" width={80} height={52} />
      </Link>

      <LinkRow>
        <LinkItem href="#">Privacy Policy</LinkItem>
        <LinkItem href="#">Data Protection in Brazil</LinkItem>
        <LinkItem href="#">Subscriber Agreement</LinkItem>
        <LinkItem href="#">Help</LinkItem>
      </LinkRow>

      <LinkRow>
        <LinkItem href="#">Supported Devices</LinkItem>
        <LinkItem href="#">About Us</LinkItem>
        <LinkItem href="#">Interest-based Ads</LinkItem>
      </LinkRow>

      <Description>
        Disney+ is a paid service, based on subscription and subject to terms
        and conditions. The Disney+ service is marketed by The Walt Disney
        Company (Brazil) Ltda., World Trade Center, Av. Das Nações Unidas,
        12.551, 12.555, 12.559, Piso 10, São Paulo / SP - CEP 04578-903, Brazil
        and CNPJ / M 73.042.962 / 0004-20
      </Description>

      <Copyright>© Disney. All Rights Reserved.</Copyright>
    </Container>
  )
}
