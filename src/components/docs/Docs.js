import React from 'react'
import styled from 'styled-components'

const Docs = () => {
  return (
    <>
      <MainHeaderContainer>
        <MainHeader>Getting Started</MainHeader>
        <SubHeader>
          This page is an overview of the simple todo documentation and related
          resources.
        </SubHeader>
      </MainHeaderContainer>
      <BasicUsageSection>
        <BasicUsageHeader>Basic Usage</BasicUsageHeader>
      </BasicUsageSection>
    </>
  )
}

const Container = styled.div``

const MainHeaderContainer = styled.div`
  padding: 2rem;
`

const MainHeader = styled.h2``

const SubHeader = styled.h3``

const BasicUsageSection = styled.section`
  padding: 2rem;
`

const BasicUsageHeader = styled.h3``

export default Docs
