import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { fromJS } from 'immutable'

import configureStore from '../client/store'
import MasterLayout from '../client/components/MasterLayout'
import Global from '../resources/styles/global'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const layoutProps = {
      theme: await import('../resources/jsons/theme.iqiyi.json'),
      menu: (await import('../resources/jsons/menu.json')).menu,
      title: '愛奇藝'
    }

    return { pageProps, layoutProps }
  }

  render () {
    const { Component, store, pageProps, layoutProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <MasterLayout { ...layoutProps }>
            <Head>
              <title>{ layoutProps.title }</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component theme={ layoutProps.theme } { ...pageProps } />
            <style jsx global>{`
              html {
                background-color: rgba(${ layoutProps.theme.contentBackgroundColor }, 1);
              }
            `}</style>
          <style jsx global>{Global}</style>
          </MasterLayout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
})(withReduxSaga(MyApp))
