import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, saveTodo, toggleTodo } from '../../actions'
import cogoToast from 'cogo-toast'

const Todo = ({ content, index, createdAt, isCompleted, id, isSaved }) => {
  const savedTodos = useSelector(
    state => state.todosReducer.todosApp.savedTodos
  )
  const dispatch = useDispatch()
  return (
    <Container>
      <ContentWrapper>
        <Date>{`Created At: ${createdAt.toLocaleString()}`}</Date>
        <InputContentWrapper>
          <Checkbox
            type='checkbox'
            checked={isCompleted}
            onClick={() => dispatch(toggleTodo(id))}
          />
          <Content contentEditable={true} isCompleted={isCompleted}>
            {content}
          </Content>
        </InputContentWrapper>
      </ContentWrapper>
      <ButtonsWrapper>
        <SaveButton
          onClick={e => {
            if (savedTodos.length !== 0) {
              if (content === savedTodos[0].content) {
                return
              } else {
                dispatch(saveTodo(index))
                cogoToast.success('Saved To Saved Todos')
              }
            } else {
              dispatch(saveTodo(index))
              cogoToast.success('Saved To Saved Todos')
            }
          }}
          isSaved={isSaved}
        >
          ♥
        </SaveButton>
        <DeleteButton
          onClick={() => {
            dispatch(deleteTodo(id))
          }}
        >
          &times;
        </DeleteButton>
      </ButtonsWrapper>
    </Container>
  )
}

const Container = styled.li`
  background-color: lightblue;
  width: 20.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
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
  margin-top: -0.1rem;
  font-size: 0.9em;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Content = styled.p`
  margin-top: -0.5rem;
  font-size: 1.1em;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`

const SaveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.6em;
  color: ${({ isSaved }) => (isSaved ? 'red' : 'black')};
`

const InputContentWrapper = styled.div`
  display: flex;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 3rem;
`

const Checkbox = styled.input`
  position: relative;
  top: -0.18rem;
  margin-right: 0.5rem;
`

export default Todo
