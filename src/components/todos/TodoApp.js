import React from 'react'
import Todos from './Todos'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, handleInputChange } from '../../actions'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

const TodoApp = () => {
  const inputValue = useSelector(
    state => state.todosReducer.todosApp.inputValue
  )
  const dispatch = useDispatch()
  return (
    <Container>
      <Header>Todo App</Header>
      <InputContainer>
        <Input
          type='text'
          value={inputValue}
          autoCapitalize='words'
          placeholder='Enter New Todo...'
          onChange={e => {
            dispatch(handleInputChange(e.target.value))
          }}
        />
        <Submit
          type='submit'
          value='Add'
          onClick={e => {
            e.preventDefault()
            if (inputValue === '') {
              return
            } else {
              dispatch(
                addTodo({
                  id: uuid(),
                  content: inputValue,
                  createdAt: new Date(),
                  isCompleted: false,
                  isSaved: false,
                })
              )
            }
          }}
        />
      </InputContainer>
      <Todos />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.p`
  font-size: 1.5em;
`

const InputContainer = styled.div`
  display: flex;
`

const Input = styled.input`
  border-radius: 5px;
  padding: 0.7rem;
  font-size: 1em;
  border: none;
  width: 20rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.55);
`

const Submit = styled.input`
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 5px;
  font-size: 1em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export default TodoApp
