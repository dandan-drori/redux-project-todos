import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoApp from './components/todos/TodoApp'
import Nav from './components/navigation/Nav'
import SavedTodos from './components/todos/SavedTodos'
import QuizApp from './components/quiz-app/QuizApp'
import Home from './components/home/Home'
import GlobalStyle from './theme/globalStyle'
import BottomNav from './components/navigation/BottomNav'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/todos'>
            <TodoApp />
          </Route>
          <Route path='/saved-todos'>
            <SavedTodos />
          </Route>
          <Route path='/quiz-app'>
            <QuizApp />
          </Route>
        </Switch>
        <BottomNav />
      </>
    </Router>
  )
}

export default App
