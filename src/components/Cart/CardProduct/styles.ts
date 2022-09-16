import styled from '@emotion/styled'

export const Container = styled.div`
  height: 7rem;
  margin: 0.4rem;

  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
`
export const ProductImage = styled.div`
  width: 5rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-family: var(--font-bold);
  color: var(--color-black);

  white-space: nowrap;
`

export const Price = styled.p`
  font-size: 1rem;
  font-family: var(--font-bold);

  color: var(--color-price);
`

export const Quanty = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Button = styled.button`
  font-size: 1.5rem;
  color: var(--color-white);

  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem;
  border: solid 0.2rem var(--color-promotion);
  border-radius: 100%;
  background-color: var(--color-promotion);

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

export const QuantyNumber = styled.p`
  font-size: 1.2rem;
  color: var(--color-black);
  font-family: var(--font-bold);
`
export const Icons = styled.div`
  font-size: 1.6rem;
  color: var(--color-black);

  svg:hover {
    cursor: pointer;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
