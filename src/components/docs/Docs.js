import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Docs = () => {
	return (
		<>
			<MainHeaderContainer>
				<MainHeader>Getting Started</MainHeader>
			</MainHeaderContainer>
			<Section>
				<SubHeader>Navigation</SubHeader>
				<SectionTextWrapper>
					<SectionText>
						If you are viewing this website on a desktop or a laptop, use the
						links in the navigation bar located at the top of your screen.
					</SectionText>
					<SectionText>
						<Link to='/'>Simple Todo</Link> - Navigates to the home page, where
						you can find basic information about the website, including a link
						to a contact form you can use to reach out to us.
					</SectionText>
					<SectionText>
						<Link to='/todos'>Todos</Link> - Navigates to the Todo-App,
						featuring a interactive User Interface for managing tasks. Includes
						features like adding, saving, deleting and setting progress on
						tasks.
					</SectionText>
					<SectionText>
						<Link to='/saved-todos'>Saved Todos</Link> - Navigates to the saved
						tasks section of the todos app, displaying your saved tasks, and
						allowing for re-addition to main tasks page, and deleting from saved
						tasks.
					</SectionText>
					<SectionText>
						<Link to='/quiz-app'>Quiz App</Link> - Navigates to the quiz app,
						displaying an interface for choosing a topic out of four available
						topics: Animals, Drinks, Food and Computers. Upon choosing a topic,
						you will be redirected to the appropriate quiz.
					</SectionText>
				</SectionTextWrapper>
			</Section>
			<Section>
				<SubHeader>Basic Usage</SubHeader>
				<SectionText>Todos</SectionText>
			</Section>
		</>
	)
}

const MainHeaderContainer = styled.div`
	padding: 2rem;
`

const MainHeader = styled.h2``

const SubHeader = styled.h3`
	margin-bottom: 1rem;
`

const Section = styled.section`
	padding: 2rem;
`

const SectionTextWrapper = styled.div``

const SectionText = styled.p`
	font-size: 1.1em;
	line-height: 1.7em;
`

export default Docs
