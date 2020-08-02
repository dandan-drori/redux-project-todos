import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Todos = () => {
  const todos = useSelector(state => state.todosReducer.todosApp.todos)
  return (
    <div>
      {todos.length === 0 ? (
        <EmptyMessage>No Todos</EmptyMessage>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              content={todo.content}
              index={index}
              createdAt={todo.createdAt}
              isCompleted={todo.isCompleted}
              isSaved={todo.isSaved}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

const EmptyMessage = styled.p`
  margin-top: 2rem;
`

export default Todos
