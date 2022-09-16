import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  overflow: hidden;
`

export const ImagePrimary = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.5s;
  border-radius: 1rem;

  span {
    width: 100%!important;
  }

  img {
    width: 100%!important;
    height: 16rem!important;
  }
`

export const Footer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-evenly;
  align-items: center;

  height: 4rem;

  font-size: 2rem;
  color: var(--color-black);

  svg:hover {
    cursor: pointer;
  }
`

export const ContendDivs = styled.div`
  display: flex;
  gap: 0.2rem;
`

export const DivLength = styled.div<{ selected: boolean }>`
  width: 1rem;
  height: 1rem;

  background-color: ${ props =>
    props.selected
      ? 'var(--color-selected)'
      : 'var(--color-gray)'
};

  border-radius: 5rem;
  transition: background-color 1s;
`
