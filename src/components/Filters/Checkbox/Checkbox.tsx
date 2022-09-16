import React, { useState } from 'react'

import { MdRadioButtonChecked, MdRadioButtonUnchecked  } from 'react-icons/md'
import { Container, Icon, Label } from './styles'
import { ICheckbox } from './types'

export const CheckBox = ({ handleChange, label, id }: ICheckbox) => {

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleVisible = () => {
    if(loading) return;
    setLoading(true)

    handleChange(!visible, id)
    setVisible(prevState => !prevState)
    setTimeout(() => {
      setLoading(false)
    },200)
  }

  return (
    <Container id={id}>
      <Icon visible={visible} onClick={handleVisible}>
        <MdRadioButtonChecked />
      </Icon>
      <Icon visible={!visible} onClick={handleVisible}>
        <MdRadioButtonUnchecked />
      </Icon>

      <Label>{label}</Label>
    </Container>
  )
}
