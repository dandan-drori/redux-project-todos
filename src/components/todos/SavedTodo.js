import React from 'react'
import styled from 'styled-components'
import { deleteSavedTodo, addTodoFromSaved } from '../../actions'
import { useDispatch } from 'react-redux'
import cogoToast from 'cogo-toast'

const SavedTodo = ({ content, index, createdAt }) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <ContentWrapper>
        <Date>{createdAt}</Date>
        <Content>{content}</Content>
      </ContentWrapper>
      <ButtonsWrapper>
        <AddButton
          onClick={() => {
            dispatch(addTodoFromSaved(index))
            cogoToast.success('Added To Todos List')
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
