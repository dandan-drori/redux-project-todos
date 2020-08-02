import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../theme/sharedStyle'
import device from '../../breakpoints/breakpoints'
import { FaBeer } from 'react-icons/fa'
import { FaDog } from 'react-icons/fa'
import { FaUtensils } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'

const Topics = ({
  foodHighscore,
  animalsHighscore,
  drinksHighscore,
  computersHighscore,
}) => {
  const linkStyles = {
    width: '100%',
    height: '78%',
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    fontSize: '1.4em',
    color: 'black',
    fontWeight: 500,
  }
  const iconStyle = { marginTop: '0.5rem', fontSize: '1.5em' }
  return (
    <Container>
      <Header>Choose A Topic:</Header>
      <List>
        <AnimalsItem>
          <Link to='/quiz-app/animals' style={linkStyles}>
            Animals
            <FaDog color='brown' style={iconStyle} />
            <HighScore>Highscore: {animalsHighscore}</HighScore>
          </Link>
        </AnimalsItem>
        <DrinksItem>
          <Link to='/quiz-app/drinks' style={linkStyles}>
            Drinks
            <FaBeer color='#f28e1c' style={iconStyle} />
            <HighScore>Highscore: {drinksHighscore}</HighScore>
          </Link>
        </DrinksItem>
        <FoodItem>
          <Link to='/quiz-app/food' style={linkStyles}>
            Food
            <FaUtensils color='#c0c0c0' style={iconStyle} />
            <HighScore>Highscore: {foodHighscore}</HighScore>
          </Link>
        </FoodItem>
        <ComputersItem>
          <Link to='/quiz-app/computers' style={linkStyles}>
            Computers
            <FaDesktop style={iconStyle} />
            <HighScore>Highscore: {computersHighscore}</HighScore>
          </Link>
        </ComputersItem>
      </List>
      <ClearStorage
        onClick={() => {
          localStorage.clear()
        }}
      >
        Clear Highscores
      </ClearStorage>
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
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const List = styled.ul`
  width: 29rem;
  height: 29rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: center;

  @media ${device.mobileL} {
    height: 22rem;
    width: 22rem;
    margin-top: 1rem;
  }
`

const Item = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 45%;
  height: 45%;
  border-radius: 15px;
`

const HighScore = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  letter-spacing: 0.03em;
`

const ClearStorage = styled(Button)`
  @media ${device.mobileL} {
    margin-top: 3rem;
  }
`

const AnimalsItem = styled(Item)`
  box-shadow: 1px 1px 3px 1px rgba(165, 42, 42, 0.55);
`

const DrinksItem = styled(Item)`
  box-shadow: 1px 1px 3px 1px rgba(242, 142, 28, 0.55);
`

const FoodItem = styled(Item)`
  box-shadow: 1px 1px 3px 1px rgba(192, 192, 192, 1);
`

const ComputersItem = styled(Item)`
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.55);
`

export default Topics
