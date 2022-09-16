import styled from '@emotion/styled'

export const Icon = styled.div`
  margin: 10px;

  position: relative;
  width: 2.5rem;

  font-size: 2rem;
  color: var(--color-white);

  p {
    position: absolute;
    right: -0.6rem;
    top: -0.5rem;

    width: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.1rem;
    color: var(--color-white);
    background-color: var(--color-red);
    border-radius: 1rem;
  }

  :hover {
    cursor: pointer;
  }
`


export const Container = styled.div`
  position: relative;
`

export const Modal = styled.div<{open: boolean}>`
  width: 20rem;
  position: absolute;
  top: 3rem;
  right: 0;
  height: ${props => props.open ? '29rem' : '0rem'};
  padding:  ${props => props.open ? '1rem' : '0rem'};;
  opacity: ${props => props.open ? '1' : '0'};;

  border-radius: 1rem;

  background-color: var(--color-white);
  z-index: 100;
  transition: height 2s, padding 3s, opacity 1s;

  box-shadow: 0 0 10px 0 #0006;
  overflow: hidden;
`

export const Title = styled.p`
  font-size: 1.2rem;
  height: 2rem;
  font-family: var(--font-bold);
  color: var(--color-black);

  text-align: center;
  border-bottom: 0.1rem solid var(--color-gray);
`

export const ListCards = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  height: 20rem;
  overflow-y: auto;
`

export const Button = styled.button`
  font-size: 1.1rem;
  width: 8rem;
  height: 2rem;
  font-family: var(--font-regular);

  background: var(--color-button);
  color: var(--color-white);

  border: none;
  border-radius: 1rem;

  :hover {
    cursor: pointer;
  }
`

export const Footer = styled.div`
 margin-top: 1rem;
  border-top: 0.1rem solid var(--color-gray);
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TotalPrice = styled.p`
  font-size: 1rem;
  font-family: var(--font-semibold);
  color: var(--color-black);
`

export const Price = styled.span`
  font-size: 1.1rem;
  font-family: var(--font-bold);
  color: var(--color-black);
`
