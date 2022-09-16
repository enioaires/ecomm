import Image from 'next/image'
import React, { useState } from 'react'

import { BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

import Tenis3 from '../../../assets/img/tenis/tenis-laranja3.png'
import { Button, Container, Icons, Price, ProductImage, Quanty, QuantyNumber, Texts, Title } from './styles'

export const CardProduct = () => {

  const [qty, setQty] = useState(1)

  const some = () => setQty(prev => prev + 1)
  const sub = () => setQty(prev => prev - 1 > 0 ? prev - 1 : 1)

  return (
    <Container>
      <ProductImage>
        <Image src={Tenis3} alt="" />
      </ProductImage>

      <Texts>
        <Title>Tenis Academia</Title>

        <Price>R$ {129 * qty}</Price>
        <Quanty>
          <Button onClick={sub}> - </Button>
          <QuantyNumber> {qty} </QuantyNumber>
          <Button onClick={some}> + </Button>
        </Quanty>
      </Texts>

      <Icons>
        <BsTrash />
        <FiEdit />
      </Icons>
    </Container>
  )
}
