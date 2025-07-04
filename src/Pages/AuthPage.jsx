import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'
import ForgetPassword from '../Components/ForgetPassword'
import Navbar from '../Components/Navbar'
import SignupForm from '../Components/SignupForm'

export default function AuthPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeForm, setActiveForm] = useState('login')

  useEffect(() => {
    // Check URL params when component mounts or params change
    const formType = searchParams.get('form')
    if (formType === 'signup' || formType === 'login' || formType === 'forget') {
      setActiveForm(formType)
    }
  }, [searchParams])

  const handleForgotClick = () => {
    setSearchParams({ form: 'forget' })
  }

  return (
    <div>
      <Navbar />
      {activeForm === 'signup' && <SignupForm />}
      {activeForm === 'login' && <LoginForm onForgotClick={handleForgotClick} />}
      {activeForm === 'forget' && <ForgetPassword />}
    </div>
  )
}