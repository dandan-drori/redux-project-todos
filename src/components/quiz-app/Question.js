import React, { useState } from 'react'
import styled from 'styled-components'
import Answer from './Answer'
import { FaLightbulb } from 'react-icons/fa'
import device from '../../breakpoints/breakpoints'
import { Button } from '../../theme/sharedStyle'

const Question = ({
  question,
  handleCorrectAnswer,
  handleWrongAnswer,
  isHintVisible,
  setIsHintVisible,
}) => {
  const [formValue, setFormValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    formValue === question.rightAnswer
      ? handleCorrectAnswer()
      : handleWrongAnswer()
  }

  const handleChange = e => {
    setFormValue(e.target.value)
  }

  return (
    <Container>
      <Header>question {question.questionNumber}:</Header>
      <QuestionText>{question.question}</QuestionText>
      <List>
        {question.answers.map((answer, index) => (
          <Answer
            answer={answer}
            index={index}
            key={index}
            handleChange={handleChange}
          />
        ))}
      </List>
      <Submit type='submit' onClick={handleSubmit}>
        Submit
      </Submit>
      <HintButton onClick={() => setIsHintVisible(!isHintVisible)}>
        <FaLightbulb color='yellow' />
        Hint
      </HintButton>
      <HintTextWrapper isHintVisible={isHintVisible}>
        <HintSide>{''}</HintSide>
        <HintText>Hint: {question.hint}</HintText>
      </HintTextWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.p`
  font-size: 1.3em;
  color: blue;
  text-decoration: underline;
`

const QuestionText = styled.p`
  font-size: 1.2em;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;

  @media ${device.mobileL} {
    margin-left: 1rem;
  }
`

const Submit = styled(Button)`
  @media ${device.mobileL} {
    margin-top: 0.5rem;
    font-size: 1.1em;
  }
`

const HintButton = styled.button`
  border-radius: 5px;
  margin-top: 3rem;
  padding: 0.5rem;
  font-size: 0.9em;
  background: none;
  cursor: pointer;
  border: none;
  text-decoration: underline;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);

  @media ${device.mobileL} {
    font-size: 1em;
  }
`

const HintTextWrapper = styled.div`
  background-color: grey;
  margin-top: 1rem;
  max-width: 50%;
  display: flex;
  border-radius: 5px;
  position: relative;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  padding-right: 0.5rem;

  @media ${device.mobileL} {
    max-width: 80%;
  }

  ${({ isHintVisible }) => (isHintVisible ? 'display: block' : 'display: none')}
`

const HintText = styled.p`
  color: white;
  margin-left: 1rem;
`

const HintSide = styled.div`
  background-color: yellow;
  height: 100%;
  width: 0.3rem;
  position: absolute;
  border-radius: 5px 0 0 5px;
`

export default Question
