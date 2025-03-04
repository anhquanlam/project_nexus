import React from 'react'
import Head from 'next/head'
import AppFooter from '../../components/footer/index'
import ThanksPages from '../../components/thanks-page/index'

export default function ThanksPage() {
    return (
        <>
            <Head>
                <title>Thank you page</title>
            </Head>
            <div className="flex min-h-screen flex-col">
                <ThanksPages />
                <AppFooter />
            </div>
        </>
    )
}
