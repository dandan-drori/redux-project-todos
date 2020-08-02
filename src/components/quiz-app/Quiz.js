import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Question from './Question'
import { useSelector } from 'react-redux'
import cogoToast from 'cogo-toast'
import device from '../../breakpoints/breakpoints'
import { FaArrowLeft } from 'react-icons/fa'
import { defaultShadow } from '../../theme/sharedStyle'

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
      if (score + 100 > highscore) {
        setHighscore((score + 100).toString())
      }
    } else {
      cogoToast.success('Correct Answer! Moving on...')
    }
  }

  if (!strikes) {
    if (score + 100 > highscore) {
      setHighscore((score + 100).toString())
    }
  }

  const handleWrongAnswer = () => {
    setStrikes(strikes - 1)
    cogoToast.error(`Wrong Answer. ${strikes - 1} Strike/s remaining`)
    if (score + 100 > highscore) {
      setHighscore((score + 100).toString())
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
  }, [countdown, currentQuestionNumber, strikes])

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
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  box-shadow: ${defaultShadow};

  @media ${device.mobileL} {
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgba(255, 150, 150, 0.9);
  }
`

const LinkWrapper = styled.div`
  margin-left: 1rem;
  @media ${device.mobileL} {
    margin-right: 1rem;
    margin-left: 0rem;
  }
`

const Header = styled.p`
  margin-left: 4rem;
  font-size: 1.3em;
  font-weight: 400;

  @media ${device.mobileL} {
    text-align: center;
    margin: 0;
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
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media ${device.mobileL} {
    margin-right: 0;
    padding-right: 0.1rem;
  }
`

export default Quiz
