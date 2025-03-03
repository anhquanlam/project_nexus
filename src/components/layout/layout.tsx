import React from 'react'
import AppHeader from '../header'
import AppFooter from '../footer'

interface Props {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-grow">{children}</main>
      <AppFooter />
    </div>
  )
}
