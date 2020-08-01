import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector(state => state.todosReducer.todosApp.todos)
  return (
    <div>
      {todos.length === 0 ? (
        <p>No Todos</p>
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

export default Todos
