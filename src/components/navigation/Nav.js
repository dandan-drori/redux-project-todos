import React from 'react'
import { Link } from 'react-router-dom'
import device from '../../breakpoints/breakpoints'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

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
        <LogoSpan>simple</LogoSpan>
        <LogoCheckIcon />
        odo
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
  background: rgb(57, 45, 255);
  background: linear-gradient(
    45deg,
    rgba(37, 125, 250, 0.9) 27%,
    rgba(50, 172, 255, 0.9) 100%
  );

  @media ${device.tablet} {
    display: none;
  }
`

const LogoSpan = styled.span`
  font-weight: 500;
`

const LogoCheckIcon = styled(FaCheck)`
  transform: rotateZ(20deg) scaleX(-1);
  position: relative;
  top: 0.15rem;
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
