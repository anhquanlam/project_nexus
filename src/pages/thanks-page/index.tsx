import React from 'react'
import AppFooter from '../../components/footer/index'
import ThanksPages from '../../components/thanks-page/index'

export default function ThanksPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <ThanksPages />
            <AppFooter />
        </div>
    )
}