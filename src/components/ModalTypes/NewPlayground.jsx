import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'

const Modal = styled.div`
  padding: 0 1.5rem;
`


const Header = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  gap: 5rem;
`

const Heading = styled.h2`
`

const Footer = styled.div`
  margin-top:.25rem;
  padding: 1rem .5rem;
`
const Input = styled.input`
  padding: .25rem;
  border-radius:5px;
`

const Select = styled.select`
  padding: .25rem;
  border-radius:5px;
`
const Button = styled.button`
  padding: .25rem;
  margin-top: 1rem;
  border-radius:5px;
  color: white;
  background-color: #343030;
  cursor: pointer;
` 


const NewPlayground = () => {
  return (
    <Modal>
      <Header>
        <Heading>Create New Playground</Heading>
        <IoCloseSharp />
      </Header>
      <Footer>
        <p>
          <Input type="text" />
          <Select name="" id="">
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
          </Select>
        </p>
        <Button>Create Playground</Button>
      </Footer>
    </Modal>
  );
}

export default NewPlayground