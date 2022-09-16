import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CardProduct } from './CardProduct/CardProduct'
import { Button, Container, Footer, Icon, ListCards, Modal, Price, Title, TotalPrice } from './styles'

export const Cart = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(prevState => !prevState)

  return (
    <Container>
      <Icon>
        <BsCart3 onClick={handleOpen}/>
        <p>9</p>
      </Icon>

      <Modal open={open} >

        <Title> Produtos Selecionados </Title>

        <ListCards>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ListCards>

        <Footer>

          <TotalPrice>
            Total: <Price>R$ 1.000,00</Price>
          </TotalPrice>

          <Button> Pagamento </Button>
        </Footer>
      </Modal>
    </Container>
  )
}
