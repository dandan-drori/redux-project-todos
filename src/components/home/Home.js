import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
import { defaultShadow } from '../../theme/sharedStyle'
import device from '../../breakpoints/breakpoints'

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Welcome</Header>
      </HeaderContainer>
      <FeaturesSection>
        <FeaturesHeader>Features</FeaturesHeader>
        <FeaturesContainer>
          <FeatureContainer>
            <FeatureHeaderContainer>
              <CheckIcon />
              <FeatureHeader>Todos</FeatureHeader>
            </FeatureHeaderContainer>
            <FeatureContent>
              manage a list of tasks to help you be more organized and efficient
            </FeatureContent>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureHeaderContainer>
              <HeartIcon />
              <FeatureHeader>Saved</FeatureHeader>
            </FeatureHeaderContainer>
            <FeatureContent>
              save frequent tasks to use again later
            </FeatureContent>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureHeaderContainer>
              <QuestionIcon />
              <FeatureHeader>Quiz</FeatureHeader>
            </FeatureHeaderContainer>
            <FeatureContent>
              Sharpen your critical thinking skills with an interactive game
            </FeatureContent>
          </FeatureContainer>
        </FeaturesContainer>
      </FeaturesSection>
    </Container>
  )
}

const Container = styled.div`
  padding: 0;

  @media ${device.mobileL} {
    padding-bottom: 2rem;
  }
`

const HeaderContainer = styled.div`
  padding: 2rem;
`

const Header = styled.h1`
  color: rgba(50, 50, 200, 0.9);
  font-size: 2.5em;
`

const FeaturesSection = styled.section`
  padding: 2rem;
`

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const FeatureContainer = styled.div`
  border-radius: 25px;
  padding: 1rem 2rem;
  box-shadow: ${defaultShadow};
  margin-bottom: 1.5rem;
  width: 25%;

  @media ${device.mobileL} {
    width: auto;
  }
`

const FeaturesHeader = styled.h2`
  text-align: center;
`

const FeatureHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${defaultShadow};
  border-radius: 50%;
  width: 5rem;
  margin: 0 auto;
`

const FeatureHeader = styled.h4``

const FeatureContent = styled.p`
  text-align: center;
`

const CheckIcon = styled(FaCheck)`
  position: relative;
  top: 0.75rem;
`

const HeartIcon = styled(FaHeart)`
  position: relative;
  top: 0.75rem;
`

const QuestionIcon = styled(FaQuestion)`
  position: relative;
  top: 0.75rem;
`

export default Home
