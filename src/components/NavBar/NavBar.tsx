import React from 'react'
import { Cart } from '../Cart'
import { Container } from './styled'

export const NavBar = () => {
  return (
    <Container>
      <div>
        Logo
      </div>

      <p>
        Entrar
      </p>

      <p>
        Cadastrar
      </p>

      <Cart />
    </Container>
  )
}
