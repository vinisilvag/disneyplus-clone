import styled from 'styled-components'

export const Container = styled.footer`
  background-color: transparent;

  margin: 0 auto;

  width: 100%;
  max-width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3rem 0;

  img {
    cursor: pointer;
    margin-bottom: 0.5rem !important;
  }
`

export const LinkRow = styled.div`
  width: 100%;

  padding: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`
export const LinkItem = styled.a`
  font-size: 13px;

  color: ${props => props.theme.colors.text};
  text-decoration: none;
`

export const Description = styled.p`
  padding: 1rem 0;
  font-size: 13px;
`

export const Copyright = styled.p`
  font-size: 13px;
`
