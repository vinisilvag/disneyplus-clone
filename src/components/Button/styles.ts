import styled from 'styled-components'

export const CustomButton = styled.button<{ outlined: boolean }>`
  padding: 0.55rem 1rem;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  border-radius: 0.3rem;
  transition: all 0.2s ease 0s;
  text-transform: uppercase;

  border: 1px solid transparent;

  border-color: ${props => props.outlined && props.theme.colors.white};
  background-color: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props =>
      props.outlined ? props.theme.colors.white : '#0483ee'};
    color: ${props => props.outlined && props.theme.colors.background};
  }

  &:active {
    transform: scale(0.95);
  }
`
