import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/globalStyle'
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { Helmet } from 'react-helmet'
import Favicon from '../../../static/favicon.ico'

type TemplateProps = {
  title: string
  description: string
  url: string
  children: ReactNode
}

const Contents = styled.div`
  padding-top: 200px;
  min-height: calc(100vh - 185px);
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  children,
}) {
  return (
    <main>
      <Helmet>
        <html lang="ko" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@soheetech" />
        <meta name="twitter:creator" content="@soheetech" />

        <link rel="icon" type="image/x-icon" href={Favicon} />
      </Helmet>

      <GlobalStyle />

      <Header />
      <Contents className="contents-wrapper">{children}</Contents>
      <Footer />
    </main>
  )
}

export default Template
