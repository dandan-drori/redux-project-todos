import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
import { defaultShadow } from '../../theme/sharedStyle'
import device from '../../breakpoints/breakpoints'
import { Button } from '../../theme/sharedStyle'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          Welcome to <LogoSpan>simple</LogoSpan>
          <LogoCheckIcon />
          odo,
        </Header>
        <SubHeader>Your new task manager.</SubHeader>
        <CallToAction>
          <SecondaryButton>
            <StyledLink color='blue' to='/contact-us'>
              Contact Us
            </StyledLink>
          </SecondaryButton>
          <PrimaryButton>
            <StyledLink color='white' to='/docs'>
              Get Started
            </StyledLink>
          </PrimaryButton>
        </CallToAction>
      </HeaderContainer>
      <FeaturesSection>
        <FeaturesHeader>Features</FeaturesHeader>
        <FeaturesContainer>
          <FeatureContainer>
            <FeatureHeaderContainer shadow='rgba(0, 100, 0, 0.55)'>
              <CheckIcon />
              <FeatureHeader>Todos</FeatureHeader>
            </FeatureHeaderContainer>
            <FeatureContent>
              Manage a list of tasks to help you be more organized and efficient
            </FeatureContent>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureHeaderContainer shadow='rgba(200, 0, 0, 0.55)'>
              <HeartIcon />
              <FeatureHeader>Saved</FeatureHeader>
            </FeatureHeaderContainer>
            <FeatureContent>
              Save frequent tasks to use again later
            </FeatureContent>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureHeaderContainer shadow='rgba(230, 120, 50, 0.55)'>
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

const Header = styled.p`
  color: rgba(50, 50, 200, 0.9);
  font-size: 2.5em;
`

const LogoSpan = styled.span`
  font-weight: 500;
`

const LogoCheckIcon = styled(FaCheck)`
  transform: rotateZ(20deg) scaleX(-1);
  position: relative;
  top: 0.22rem;
`

const SubHeader = styled.p`
  color: rgba(50, 50, 200, 0.9);
  font-size: 1.7em;
  margin-top: -1.3rem;
`

const CallToAction = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-between;
`

const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid blue;
`

const PrimaryButton = styled(Button)``

const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  text-decoration: none;
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
  box-shadow: 1px 1px 3px 1px ${({ shadow }) => shadow};
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
