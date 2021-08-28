import Image from 'next/image'

import { Container, Title, Grid, GridColumn, ColumnTitle, Item } from './styles'

import tvImage from '../../../public/images/tv.png'
import computerImage from '../../../public/images/computer.png'
import mobileImage from '../../../public/images/mobile.png'
import consoleImage from '../../../public/images/consoles.png'

type DevicesSectionProps = {
  title: string
}

export const DevicesSection = ({ title }: DevicesSectionProps) => {
  const devices = [
    {
      id: 0,
      url: tvImage,
      title: 'TV',
      items: [
        'Amazon Fire TV',
        'Android TV',
        'Apple TV',
        'Chromecast',
        'LG TVs',
        'Roku',
        'Samsung'
      ]
    },
    {
      id: 1,
      url: computerImage,
      title: 'Computer',
      items: ['Chrome OS', 'MacOS', 'Windows PC']
    },
    {
      id: 2,
      url: mobileImage,
      title: 'Mobile & Tablet',
      items: [
        'Amazon Fire Tablets',
        'Android Phones & Tablets',
        'iPhone & iPad'
      ]
    },
    {
      id: 3,
      url: consoleImage,
      title: 'Game Consoles',
      items: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Xbox Series S']
    }
  ]

  return (
    <Container>
      <Title>{title}</Title>

      <Grid>
        {devices.map(device => (
          <GridColumn key={device.id}>
            <Image src={device.url} alt={device.title} />
            <ColumnTitle>{device.title}</ColumnTitle>
            {device.items.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </GridColumn>
        ))}
      </Grid>
    </Container>
  )
}
