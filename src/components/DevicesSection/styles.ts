import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 4rem;
`

export const Title = styled.h1`
  margin-bottom: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  font-size: 2.3rem;
`
export const Grid = styled.div`
  width: 100%;
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  margin-top: 0.5rem;
`

export const GridColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ColumnTitle = styled.h2`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  font-size: 22px;
`

export const Item = styled.span`
  padding: 0.4rem 0;
`
