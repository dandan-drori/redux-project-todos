import React, { useState } from 'react'
import styled from 'styled-components'
import { defaultShadow } from '../../theme/sharedStyle'
import device from '../../breakpoints/breakpoints'

const Contact = () => {
  const [emailValue, setEmailValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formValues,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const handleChange = e => setFormValues({ [e.target.name]: e.target.value })

  const { name, email, message } = formValues

  return (
    <>
      <MainHeaderContainer>
        <MainHeader>Contact Us</MainHeader>
      </MainHeaderContainer>
      <ContentWrapper>
        <ContactForm
          onSubmit={e => {
            handleSubmit(e)
          }}
          name='contact'
        >
          <input type='hidden' name='contact' value='contact' />
          <Label>Name:</Label>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={e => {
              handleChange(e)
            }}
          />
          <Label>Email:</Label>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={e => {
              handleChange(e)
            }}
          />
          <Label>Message:</Label>
          <Message
            name='message'
            value={message}
            onChange={e => {
              handleChange(e)
            }}
          />
          <Submit type='submit' value='Submit' />
        </ContactForm>
        <ContactInfo>
          <ContactInfoHeader>Contact Info</ContactInfoHeader>
          <ContactInfoContent>
            <ContactInfoEmail>
              Email Address: dandandrorid@gmail.com
            </ContactInfoEmail>
          </ContactInfoContent>
        </ContactInfo>
      </ContentWrapper>
    </>
  )
}

const MainHeaderContainer = styled.div`
  padding: 2rem;
`

const MainHeader = styled.h2`
  text-align: center;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${device.mobileL} {
    display: block;
    padding: 2rem;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 1px rgba(50, 50, 220, 0.25);

  @media ${device.mobileL} {
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
  }
`

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1em;
  width: 50%;
  border-radius: 5px;
  box-sizing: border-box;

  @media ${device.mobileL} {
    width: 100%;
  }
`

const Submit = styled.input`
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.9em;
  color: white;
  background-color: blue;
  cursor: pointer;
  border: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  width: 20%;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 25%;
  }
`

const Message = styled.textarea`
  margin-bottom: 1rem;
  font-size: 1em;
  padding: 0.5rem;
  border-radius: 5px;

  @media ${device.mobileL} {
    min-height: 4rem;
  }
`

const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1.1em;
  color: blue;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${defaultShadow};
  box-sizing: border-box;

  @media ${device.mobileL} {
    width: 100%;
    margin-bottom: 4rem;
  }
`

const ContactInfoHeader = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  text-align: center;
  margin-top: 0rem;
`

const ContactInfoContent = styled.div``

const ContactInfoEmail = styled.p``

export default Contact
