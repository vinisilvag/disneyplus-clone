import styled from 'styled-components'

export const Container = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 1000;

  width: 100%;
  height: 70px;
  background-color: ${props =>
    props.scrolled ? props.theme.colors.navbar : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;

  transition: all 0.4s ease;
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 1rem;

  img {
    cursor: pointer;
  }
`
