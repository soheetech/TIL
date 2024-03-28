import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/common/globalStyle'
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { StaticImage } from 'gatsby-plugin-image'

const NotFound = styled.div`
  padding-top: 200px;
  min-height: calc(100vh - 185px);
  text-align: center;
`

const NotFoundImage = styled.div`
  margin-top: -15px;
`

const NotFoundDescription = styled.p`
  margin: 3rem 0 2rem;
`

const GoToMainButton = styled(Link)`
  font: var(--font-italic);
  color: var(--color-graytext);

  &:hover {
    color: inherit;
  }
`

const NotFoundPage: FunctionComponent = function () {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <NotFound className="contents-wrapper">
        <NotFoundImage>
          <StaticImage src="../../static/404.png" alt="404" />
        </NotFoundImage>
        <NotFoundDescription>
          해당 기록은 존재하지 않습니다.
          <br />
          잘못된 URL을 입력하셨거나 변경, 삭제되어 찾을 수 없습니다.
        </NotFoundDescription>
        <GoToMainButton to="/">Go Home →</GoToMainButton>
      </NotFound>
      <Footer />
    </div>
  )
}

export default NotFoundPage
