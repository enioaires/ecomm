import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  padding: 1rem;
`

export const Contend = styled.div`
  display: flex;

  padding: 1rem 0;
  gap: 0.4rem;
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  gap: 0.5rem;
`

export const Title = styled.p`
  font-size: 2.2rem;
  color: var(--color-white);
  font-family: var(--font-bold);
  padding: 2rem;
  text-align: center;
`
