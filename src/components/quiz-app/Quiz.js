import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Question from './Question'
import { useSelector } from 'react-redux'
import cogoToast from 'cogo-toast'
import device from '../../breakpoints/breakpoints'
import { FaArrowLeft } from 'react-icons/fa'

const Quiz = ({ topic, highscore, setHighscore }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [strikes, setStrikes] = useState(3)
  const [score, setScore] = useState(0)
  const [countdown, setCountdown] = useState(20)
  const [isHintVisible, setIsHintVisible] = useState(false)
  const question = useSelector(
    state => state.quiz[topic][currentQuestionNumber]
  )

  const handleCorrectAnswer = () => {
    setScore(score + 100)
    setCurrentQuestionNumber(currentQuestionNumber + 1)
    setIsHintVisible(false)
    setCountdown(20)
    if (currentQuestionNumber === 7) {
      cogoToast.success('Quiz completed! Your score was recorded')
    } else {
      cogoToast.success('Correct Answer! Moving on...')
    }
  }

  const handleWrongAnswer = () => {
    setStrikes(strikes - 1)
    cogoToast.error(`Wrong Answer. ${strikes - 1} Strike/s remaining`)
    if (score > highscore) {
      setHighscore(score)
    }
  }

  useEffect(() => {
    if (countdown <= 0) {
      setStrikes(strikes - 1)
      setCurrentQuestionNumber(currentQuestionNumber + 1)
      cogoToast.error(`Time's up! ${strikes - 1} Remaining`)
      setCountdown(20)
      return
    }
    const timer = setInterval(() => {
      setCountdown(countdown - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [countdown])

  return (
    <Container>
      {!strikes ? (
        <Redirect to='/quiz-app' />
      ) : currentQuestionNumber >= 8 ? (
        <Redirect to='/quiz-app' />
      ) : (
        <>
          <HeaderContainer>
            <LinkWrapper>
              <Link
                to='/quiz-app'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaArrowLeft style={{ marginRight: '0.2rem' }} />
                Back
              </Link>
            </LinkWrapper>
            <Header>Time Left: {countdown} seconds</Header>
            <ProgressWrapper>
              <Score>Score: {score}</Score>
              <Strikes>Strikes Left: {strikes}</Strikes>
            </ProgressWrapper>
          </HeaderContainer>
          <Question
            question={question}
            handleCorrectAnswer={handleCorrectAnswer}
            handleWrongAnswer={handleWrongAnswer}
            isHintVisible={isHintVisible}
            setIsHintVisible={setIsHintVisible}
          />
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${device.mobileL} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;
`

const LinkWrapper = styled.div`
  /* width: 9rem; */
  margin-left: 1rem;
  border-radius: 15px;
  padding: 0.7rem;

  @media ${device.mobileL} {
    margin-right: 1rem;
    margin-left: 0rem;
    background-color: rgba(255, 150, 150, 0.9);
  }
`

const Header = styled.p`
  font-size: 1.3em;
  font-weight: 400;

  @media ${device.mobileL} {
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    border-radius: 15px;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 150, 150, 0.9);
  }
`

const Strikes = styled.p`
  font-size: 1.1em;
`

const Score = styled.p`
  font-size: 1.1em;
`

const ProgressWrapper = styled.div`
  margin-right: 2rem;
  border-radius: 15px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media ${device.mobileL} {
    margin-right: 0;
    padding-right: 0.1rem;
    background-color: rgba(255, 150, 150, 0.9);
  }
`

export default Quiz
