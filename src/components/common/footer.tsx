import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GitHubSVG from '../../assets/github'

const FooterWrapper = styled.footer`
  width: 100%;
  font-size: var(--font-small);
  border-top: 1px solid var(--color-black);
  margin-top: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <div className="contents-wrapper flex space items-center">
        <span>
          &copy; 2023-2024 <a href="mailto: soheetech@gmail.com">Sohee Moon</a>.
        </span>
        <a
          href="https://github.com/soheetech"
          target="_blank"
          className="flex items-center"
          aria-label="GitHub"
        >
          <GitHubSVG customStyle="fill-black size-m" />
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
