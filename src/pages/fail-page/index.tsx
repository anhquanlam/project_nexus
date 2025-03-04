import React from 'react'
import Head from 'next/head'
import AppFooter from '../../components/footer/index'
import FailPages from '../../components/fail-page/index'

export default function ThanksPage() {
    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div className="flex min-h-screen flex-col">
                <FailPages />
                <AppFooter />
            </div>
        </>
    )
}
