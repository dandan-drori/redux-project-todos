import React from 'react'
import styled from 'styled-components'
import SavedTodo from './SavedTodo'
import { useSelector } from 'react-redux'

const SavedTodos = () => {
  const savedTodos = useSelector(
    state => state.todosReducer.todosApp.savedTodos
  )
  return (
    <Container>
      <Header>Saved Todos</Header>
      {savedTodos.length === 0 ? (
        <p>No Saved Todos...</p>
      ) : (
        savedTodos.map((todo, index) => (
          <SavedTodo
            key={index}
            content={todo.content}
            createdAt={todo.createdAt.toLocaleString()}
            index={index}
          />
        ))
      )}
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
  margin: 2rem 0;
`

export default SavedTodos
