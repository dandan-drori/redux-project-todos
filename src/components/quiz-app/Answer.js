import React, { useState } from 'react'
import styled from 'styled-components'
import device from '../../breakpoints/breakpoints'

const Answer = ({ answer, index, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Item>
      <Radio
        onChange={e => handleChange(e)}
        type='radio'
        value={answer}
        name='answer'
        id={index}
      />
      <AnswerText
        htmlFor={index}
        isFocused={isFocused}
        tabIndex='0'
        onClick={() => setIsFocused(!isFocused)}
        onBlur={() => {
          setIsFocused(!isFocused)
        }}
      >
        {answer}
      </AnswerText>
    </Item>
  )
}

const Item = styled.li`
  list-style: none;
  display: flex;
  width: 30%;
  margin: 0.7rem;
  align-items: center;
  border-radius: 15px;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
`

const AnswerText = styled.label`
  font-size: 1.1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.1rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  border-radius: 15px;
  outline: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ isFocused }) => (isFocused ? 'green' : 'transparent')};
  background-color: ${({ isFocused }) =>
    isFocused ? 'lightgrey' : 'transparent'};

  &:hover {
    background-color: lightgrey;
  }

  @media ${device.mobileL} {
    padding: 0.35rem;
  }
`

const Radio = styled.input`
  cursor: pointer;
  display: none;
`

export default Answer
