import React from 'react'
import { MdFilterListAlt } from 'react-icons/md'
import { Container, Contend, Title } from './styles'
import { IFilters } from './types'

export const Filters = ({ children }: IFilters) => {

  return (
    <Container>
      <Title>Filtros <MdFilterListAlt /></Title>

      <Contend>
        {children}
      </Contend>
    </Container>
  )
}
