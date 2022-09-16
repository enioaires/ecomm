import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;

  width: 22rem;
  height: 38rem;

  overflow: hidden;
`

export const Card = styled.div`
  position: absolute;

  width: 22rem;
  height: 38rem;

  background: var(--color-white);
  border-radius: 1rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  transition: opacity 2s, margin 2s;
`

export const Title = styled.p`
  font-size: 1.5rem;
  font-family: var(--font-bold);

  color: var(--color-black);
`

export const TextDescription = styled.p`
  margin-top: 1rem;

  font-size: 1.2rem;
  font-family: var(--font-medium);
  line-height: 1rem;

  color: var(--color-text);
`

export const TextPromotion = styled.p`
  height: 1.4rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  font-size: 1rem;
  font-family: var(--font-semibold);

  color: var(--color-promotion);
`

export const Footer =styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: auto;
`

export const Price = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-bold);

  color: var(--color-price);
`

export const Button = styled.button`
  font-size: 1rem;
  width: 12rem;
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
