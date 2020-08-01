import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoApp from './components/TodoApp'
import Nav from './components/Nav'
import SavedTodos from './components/SavedTodos'
import QuizApp from './components/QuizApp'
import Home from './components/Home'
import GlobalStyle from './theme/globalStyle'
import styled from 'styled-components'
import BottomNav from './components/BottomNav'

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
