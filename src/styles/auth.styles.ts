import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.colors.backgroundLogin};

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 3.5rem;

  img {
    cursor: pointer;
  }
`

export const FormContainer = styled.section`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  margin-top: 2rem;
`
export const Form = styled.form`
  width: 100%;
  margin-top: 1.6rem;

  button {
    width: 100%;
    font-weight: 500;
    letter-spacing: normal;
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
    margin-top: 0.6rem;
  }
`
export const SignUpText = styled.p`
  font-size: 13px;
  padding-top: 1rem !important;

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-weight: 500;

    :hover {
      text-decoration: underline;
    }
  }
`

export const SignInButton = styled.span`
  position: absolute;

  top: 4rem;
  right: 4rem;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.text};

    :hover {
      color: ${props => props.theme.colors.white};
    }
  }
`
