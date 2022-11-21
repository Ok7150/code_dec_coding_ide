import React from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'

const Modal = styled.div`
  padding: 0 1rem;
`

const Header = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  gap: 5rem;
`

const Heading = styled.h2`
`

const Footer = styled.div`
  margin-top:.5rem;
  padding: 1rem .5rem;
`

const Input = styled.input`
  padding: .25rem;
  border-radius:5px;
`

const Button = styled.button`
  padding: .25rem;
  border-radius:5px;
  color: white;
  background-color: #343030;
  cursor: pointer;
`
const NewFolder = () => {
  return (
    <Modal>
      <Header>
        <Heading>Create New Folder</Heading>
        <IoCloseSharp />
      </Header>
      <Footer>
        <p>
          <Input type="text" /> <span></span>
          <Button>Create Folder</Button>
        </p>
      </Footer>
    </Modal>
  )
}

export default NewFolder