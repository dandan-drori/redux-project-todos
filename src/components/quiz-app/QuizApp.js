import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Topics from './Topics'
import Quiz from './Quiz'
import useLocalStorage from '../../hooks/useLocalStorage'

const QuizApp = () => {
  const [computersHighscore, setComputersHighscore] = useLocalStorage(
    'computersHighscore',
    '0'
  )
  const [animalsHighscore, setAnimalsHighscore] = useLocalStorage(
    'animalsHighscore',
    '0'
  )
  const [drinksHighscore, setDrinksHighscore] = useLocalStorage(
    'drinksHighscore',
    '0'
  )
  const [foodHighscore, setFoodHighscore] = useLocalStorage(
    'foodHighscore',
    '0'
  )

  return (
    <Router>
      <Switch>
        <Route path='/quiz-app' exact>
          <Topics
            computersHighscore={computersHighscore}
            animalsHighscore={animalsHighscore}
            drinksHighscore={drinksHighscore}
            foodHighscore={foodHighscore}
          />
        </Route>
        <Route path='/quiz-app/animals'>
          <Quiz
            topic='animals'
            highscore={animalsHighscore}
            setHighscore={setAnimalsHighscore}
          />
        </Route>
        <Route path='/quiz-app/drinks'>
          <Quiz
            topic='drinks'
            highscore={drinksHighscore}
            setHighscore={setDrinksHighscore}
          />
        </Route>
        <Route path='/quiz-app/food'>
          <Quiz
            topic='food'
            highscore={foodHighscore}
            setHighscore={setFoodHighscore}
          />
        </Route>
        <Route path='/quiz-app/computers'>
          <Quiz
            topic='computers'
            highscore={computersHighscore}
            setHighscore={setComputersHighscore}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default QuizApp
