import styled from 'styled-components'

export const Container = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  cursor: pointer;
`

export const Initials = styled.span`
  font-weight: 600;
  font-size: 1.05rem;
  color: ${props => props.theme.colors.white};
`
