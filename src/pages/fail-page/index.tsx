import React from 'react'
import AppFooter from '../../components/footer/index'
import FailPages from '../../components/fail-page/index'

export default function ThanksPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <FailPages />
            <AppFooter />
        </div>
    )
}