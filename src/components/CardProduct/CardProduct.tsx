import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Footer, Price, TextDescription, TextPromotion, Title } from './styles'
import { TiStarburstOutline } from 'react-icons/ti'

import Tenis from '../../assets/img/tenis/tenis-laranja1.png'
import Tenis2 from '../../assets/img/tenis/tenis-laranja4.png'
import Tenis3 from '../../assets/img/tenis/tenis-laranja3.png'
import { Carrousel } from '../Carrousel'

export const ProductCard = () => {

  const list = [Tenis,Tenis2,Tenis3, Tenis,Tenis2,Tenis3, Tenis,Tenis2,Tenis3 ]

  // cardTransition
  const [margin, setMargin] = useState('100px')
  const [opactiy, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
      setMargin('0')
    }, 400)
  },[])

  return (
    <Container>
      <Card
        style={{
          opacity: opactiy,
          marginTop: margin
        }}
      >
        <Carrousel
          images={list}
        />

        <Title>
          Tenis Academia
        </Title>

        <TextPromotion>
          <TiStarburstOutline /> item na promoção!
        </TextPromotion>

        <TextDescription>
        Tenis confortavel para praticar exercicios ou ir para academia com um tema verde
        </TextDescription>

        <Footer>
          <Price>
          R$ 129,00
          </Price>
          <Button>
          Adicionar +
          </Button>
        </Footer>

      </Card>
    </Container>
  )
}
