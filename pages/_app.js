import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import withReduxStore from '../redux/next-redux'
import { Provider } from 'react-redux'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Head>
                    <script
                        src="https://use.fontawesome.com/releases/v5.6.3/js/all.js"
                        integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1"
                        crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/styles/reset.css" />
                    <link rel="stylesheet" href="/static/styles/global.css" />
                </Head>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)