import { useAuth } from '../../hooks/useAuth'
import { getInitials } from '../../utils/getInitials'
import { Container, Initials } from './styles'

export const Avatar = () => {
  const { user, signOut } = useAuth()

  return (
    <Container onClick={signOut}>
      <Initials>{getInitials(user?.name || '')}</Initials>
    </Container>
  )
}
