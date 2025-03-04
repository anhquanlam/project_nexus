import React from 'react'
import Head from 'next/head'
import SendingPages from '../../components/sending-page/index'

export default function ThanksPage() {
    return (
        <>
            <Head>
                <title>Loading Page</title>
            </Head>
            <div className="flex min-h-screen flex-col">
                <SendingPages />
            </div>
        </>
    )
}
