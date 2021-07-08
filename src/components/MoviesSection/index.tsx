import { Container, Title, Text, Grid, CardImage } from './styles'

import frozenBanner from '../../../public/images/movies/frozen.jpg'
import avengersBanner from '../../../public/images/movies/avengers.png'
import falconBanner from '../../../public/images/movies/falcon.png'
import forkyBanner from '../../../public/images/movies/forky.jpg'
import mandalorianBanner from '../../../public/images/movies/mandalorian.png'
import phineasAndFerbBanner from '../../../public/images/movies/phineasferb.jpg'
import soulBanner from '../../../public/images/movies/soul.jpg'
import starWarsBanner from '../../../public/images/movies/starwars.jpg'
import wandaVisionBanner from '../../../public/images/movies/wandavision.jpg'
import { shuffleArray } from '../../utils/shuffleArray'

type MoviesSectionProps = {
  title: string
  text: string
}

export const MoviesSection = ({ title, text }: MoviesSectionProps) => {
  const movies = [
    {
      id: 0,
      title: 'Frozen',
      url: frozenBanner
    },
    {
      id: 1,
      title: 'Avengers: Endgame',
      url: avengersBanner
    },
    {
      id: 2,
      title: 'The Falcon and The Winter Soldier',
      url: falconBanner
    },
    {
      id: 3,
      title: 'Forky Asks A Question',
      url: forkyBanner
    },
    {
      id: 4,
      title: 'The Mandalorian',
      url: mandalorianBanner
    },
    {
      id: 5,
      title: 'Phineas and Ferb the Movie: Candace Against the Universe',
      url: phineasAndFerbBanner
    },
    {
      id: 6,
      title: 'Soul',
      url: soulBanner
    },
    {
      id: 7,
      title: 'Star Wars: The Rise of Skywalker',
      url: starWarsBanner
    },
    {
      id: 8,
      title: 'WandaVision',
      url: wandaVisionBanner
    }
  ]

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>

      <Grid>
        {shuffleArray(movies).map(movie => (
          <CardImage src={movie.url} alt={movie.title} key={movie.id} />
        ))}
      </Grid>
    </Container>
  )
}
