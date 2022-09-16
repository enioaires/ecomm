import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;

  width: 20rem;
  padding: 0.2rem;
  background-color: var(--color-white);
  margin: 0.2rem;
  border-radius: 1rem;

  svg {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1rem;
    color: var(--color-black);
    z-index: 51;
  }
  z-index: 51;
`

export const Input = styled.input`
  z-index: 52;

  border: none;
  width: 18rem;
  border-radius: 1rem;
  padding-left: 0.5rem;
  height: 1.5rem;
  font-size: 1rem;
  font-family: var(--font-regular);
  color: var(--color-black);

  :focus {
    border: none;
    outline: none;
  }
`

export const Modal = styled.div<{open: boolean}>`
  width: 19rem;
  position: absolute;
  top: 2rem;
  left: 0.5rem;

  height: ${props => props.open ? '10rem' : '0rem'};
  padding:  ${props => props.open ? '1rem' : '0rem'};;
  opacity: ${props => props.open ? '1' : '0'};;

  padding-top: 2rem;
  border-radius: 1rem;
  overflow-y: auto;
  background-color: var(--color-white);
  z-index: 50;
  transition: height 2s, padding 3s, opacity 1s;

  box-shadow: 0 0 10px 0 #0006;
  overflow: hidden;
`
