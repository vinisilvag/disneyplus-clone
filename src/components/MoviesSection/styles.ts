import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 3rem;
`
export const Title = styled.h1`
  margin-bottom: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  font-size: 2.3rem;
`

export const Text = styled.h1`
  font-weight: 400;
  line-height: 1.7rem;
  width: 100%;
  max-width: 90%;
  font-size: 1.2rem;
  text-align: center;
`

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  margin-top: 3rem;
`

export const CardImage = styled(Image)`
  border-radius: 0.5rem !important;
`
