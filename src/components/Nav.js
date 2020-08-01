import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import device from '../breakpoints/breakpoints'

const Nav = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1em',
  }
  return (
    <Container>
      <Link
        to='/'
        style={{
          ...linkStyle,
          marginLeft: '5rem',
        }}
      >
        Home
      </Link>
      <List>
        <Item>
          <Link to='/todos' style={linkStyle}>
            Todos
          </Link>
        </Item>
        <Item>
          <Link to='/saved-todos' style={linkStyle}>
            Saved Todos
          </Link>
        </Item>
        <Item>
          <Link to='/quiz-app' style={linkStyle}>
            Quiz App
          </Link>
        </Item>
      </List>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  background-color: #1783ba;

  @media ${device.tablet} {
    display: none;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`

const Item = styled.li`
  list-style: none;
`

export default Nav
