import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  min-height: 100vh;
  background-image: url('/images/background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0 5rem;
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 740px;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  button {
    width: 100%;
    max-width: 340px;
    min-width: auto;

    padding: 1rem 1rem;
    font-size: 1.2rem;
    letter-spacing: normal;

    margin-top: 1.4rem;
  }
`

export const Title = styled.h1`
  margin: 1.4rem 0;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  font-size: 2.6rem;
  line-height: 3.5rem;
`

export const Subtitle = styled.h2`
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`

export const Price = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  font-weight: 500;
  color: ${props => props.theme.colors.white};
  font-size: 3rem;

  span {
    color: ${props => props.theme.colors.text};
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.6rem;
  }
`

export const Description = styled.span`
  font-weight: 400;
  color: ${props => props.theme.colors};
  font-size: 0.7rem;
  line-height: 20px;
  margin-top: 1.2rem;
  background-color: transparent;
`
export const SectionTitle = styled.h1`
  margin-bottom: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  font-size: 2.3rem;
`

export const SectionText = styled.p`
  font-weight: 400;
  line-height: 1.7rem;
  width: 100%;
  max-width: 90%;
  font-size: 1.2rem;
`

export const Main = styled.main`
  width: 100%;
  max-width: 1440px;

  padding: 0 2.5rem;

  margin: 0 auto;
`

export const WatchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 7rem 0;
`

export const WatchSectionLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 90%;
`
