import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 1.1rem;

  position: relative;
  margin: 0.1rem;
`

export const Icon = styled.div<{visible: boolean}>`
  position: absolute;

  left: 0;
  top: 0;

  color: var(--color-black);

  font-size: 1.1rem;

  opacity: ${props => props.visible ? 1 : 0};

  transition: opacity 0.5s;

  :hover {
    cursor: pointer;
  }
`

export const Label = styled.p`
  font-size: 1.1rem;
  font-family: var(--font-regular);
  letter-spacing: 0.1rem;
  margin-left: 1.3rem;

  color: var(--color-black);
`
