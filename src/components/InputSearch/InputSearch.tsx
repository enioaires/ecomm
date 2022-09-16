import React, { useState } from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import { Container, Input, Modal } from './styles'

export const InputSearch = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    setValue(value)

    if (newValue.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent> ) => {
    const target = event.target as HTMLInputElement;
    if (target.value.length > 0) {
      setOpen(true)
    }
  }

  return (
    <Container>
      <Input
        onChange={handleChange}
        value={value}
        onBlur={(e) => setOpen(false)}
        onClick={handleClick}
      />
      <BiSearchAlt />

      <Modal open={open}>
        <p onClick={() => console.log(1)}>AQQQQQQ</p>
      </Modal>
    </Container>
  )
}
