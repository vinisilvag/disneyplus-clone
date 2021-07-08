import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const CustomInput = styled.input<{ error: boolean }>`
  width: 100%;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  background-color: rgb(49, 52, 62);
  color: ${props => props.theme.colors.white};
  padding: 0.8rem 0.8rem;
  font-size: 0.85rem;

  transition: border-color 0.1s ease 0s;

  margin-bottom: ${props => props.error && '0.2rem'};

  &:focus {
    border-color: rgba(249, 249, 249, 0.3);
  }
`

export const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 0.8rem;
`
