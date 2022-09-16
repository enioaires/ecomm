import React, { useState } from 'react'
import { Container, Contend, Icon, Label, Line } from './styles'
import { IoIosArrowDown } from 'react-icons/io'
import { CheckBox } from '../Filters'

export const AccordionFilter = () => {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    if(loading) return;
    setLoading(true)

    setOpen(prevState => !prevState);

    setTimeout(() => {
      setLoading(false)
    }, 200);
  }

  return (
    <Container>
      <Line open={open}>
        <Label>
          Tamanho
        </Label>
        <Icon open={open} onClick={handleOpen}>
          <IoIosArrowDown />
        </Icon>
      </Line>

      <Contend open={open}>
        <CheckBox id="teste" label="texto" handleChange={() => {}} />
        <CheckBox id="teste" label="texto" handleChange={() => {}} />
        <CheckBox id="teste" label="texto" handleChange={() => {}} />
      </Contend>
    </Container>
  )
}
