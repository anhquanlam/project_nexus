import React from 'react'
import Head from 'next/head'
import AppHeader from '../components/header/index'
import AppFooter from '../components/footer/index'
import SurveyForm from '../components/survey-form/index'

interface Props {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Survey</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <AppHeader />
        <main className="flex-grow">{children}</main>
        <SurveyForm />
        <AppFooter />
      </div>
    </>
  )
}
