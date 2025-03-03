import React from 'react'
import AppHeader from '../components//header/index'
import AppFooter from '../components/footer/index'
import SurveyForm from '../components/survey-form/index'

interface Props {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-grow">{children}</main>
      <SurveyForm />
      <AppFooter />
    </div>
  )
}