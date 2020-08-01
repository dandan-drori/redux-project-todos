// text

export const addText = text => {
  return { type: 'ADD_TEXT', payload: text }
}

// todos

export const handleInputChange = value => {
  return { type: 'CHANGE_INPUT_VALUE', payload: value }
}
export const addTodo = todo => {
  return { type: 'ADD_TODO', payload: todo }
}

export const deleteTodo = todoId => {
  return { type: 'DELETE_TODO', payload: todoId }
}

export const toggleTodo = todoId => {
  return { type: 'TOGGLE_TODO', payload: todoId }
}

// saved todos

export const saveTodo = todo => {
  return { type: 'SAVE_TODO', payload: todo }
}

export const deleteSavedTodo = todo => {
  return { type: 'DELETE_SAVED_TODO', payload: todo }
}

export const addTodoFromSaved = todo => {
  return { type: 'ADD_TODO_FROM_SAVED', payload: todo }
}

// quizApp

export const toggleHint = topic => {
  return { type: 'TOGGLE_HINT', payload: { topic: topic } }
}
