import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill
} from 'react-icons/bs'

import { Container, ContendDivs, DivLength, Footer, ImagePrimary } from './styles'
import { IPropsCarrousel } from './types'

export const Carrousel = ({ images }: IPropsCarrousel) => {
  const minDivsList = 5
  const maxDivsLength = 3;

  const [imageActual, setImageActual] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const nextImage = () => {
    if (disabled) return;
    setOpacity(0)
    setDisabled(true)

    setTimeout(() => {
      if (imageActual + 1 >= images.length) {
        setImageActual(0)
      } else {
        setImageActual(prevState => prevState + 1)
      }
    }, 500)
  }

  const previousImage = () => {
    if (disabled) return;
    setOpacity(0)
    setDisabled(true)

    setTimeout(() => {
      if (imageActual - 1 < 0) {
        setImageActual(images.length - 1)
      } else {
        setImageActual(prevState => prevState - 1)
      }
    }, 500)
  }

  // transitions
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
      setDisabled(false)
    }, 500)
  }, [imageActual])
  // end transitions

  return (
    <Container>

      <ImagePrimary style={{ opacity: opacity }}>
        <Image src={images[imageActual]} alt="carrousel-items" />
      </ImagePrimary>

      {
        images.length > 1 && (
          <Footer>
            <BsFillArrowLeftCircleFill
              onClick={previousImage}
            />

            <ContendDivs>
              {
                images.map((_img, idx) => {

                  if (
                    idx > maxDivsLength
                    && images.length > minDivsList
                  ) return;

                  return (
                    <DivLength
                      key={idx}
                      selected={
                        idx === imageActual
                      }
                    />
                  )
                })
              }
              {
                images.length > minDivsList && (
                  <>
                    <DivLength
                      selected={
                        imageActual > maxDivsLength
                        && imageActual < images.length - 1
                      }
                    />
                    <DivLength
                      selected={ imageActual === images.length - 1}
                    />
                  </>
                )
              }
            </ContendDivs>

            <BsFillArrowRightCircleFill onClick={nextImage} />
          </Footer>
        )
      }
    </Container>
  )
}
