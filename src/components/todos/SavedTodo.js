import React from 'react'
import styled from 'styled-components'
import { deleteSavedTodo, addTodoFromSaved } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import cogoToast from 'cogo-toast'
import device from '../../breakpoints/breakpoints'

const SavedTodo = ({ content, index, createdAt }) => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todosReducer.todosApp.todos)

  return (
    <Container>
      <ContentWrapper>
        <Date>{createdAt}</Date>
        <Content>{content}</Content>
      </ContentWrapper>
      <ButtonsWrapper>
        <AddButton
          onClick={() => {
            if (todos.length !== 0) {
              let isInTodos = false
              todos.forEach(todo =>
                todo.content === content ? (isInTodos = true) : null
              )
              if (isInTodos === true) {
                return
              } else {
                dispatch(addTodoFromSaved(index))
                cogoToast.success('Added To Todos List')
              }
            } else {
              dispatch(addTodoFromSaved(index))
              cogoToast.success('Added To Todos List')
            }
          }}
        >
          +
        </AddButton>
        <DeleteButton
          onClick={() => {
            dispatch(deleteSavedTodo(index))
          }}
        >
          &times;
        </DeleteButton>
      </ButtonsWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: lightblue;
  width: 20.5rem;
  min-height: 5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 1.8em;
  color: red;
  cursor: pointer;
`

const Date = styled.p`
  color: #777;
  font-size: 0.9em;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Content = styled.p`
  font-size: 1.1em;
  margin-top: 0.3rem;

  @media ${device.mobileL} {
    margin-top: 0.6rem;
  }
`

const AddButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 1.8em;
  color: black;
  cursor: pointer;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 3rem;
`

export default SavedTodo
