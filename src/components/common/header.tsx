import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Search from './search'
import GitHubSVG from '../../assets/github'

type HeaderContainerProps = {
  active: boolean
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: ${({ active }) =>
    active ? 'var(--bg-search)' : 'var(--bg-gradient)'};
`

const HeaderWrapper = styled.header`
  padding: 20px 24px;

  h1 {
    font: var(--font-italic);
    font-size: 1.625rem;

    span {
      margin-left: 12px;
    }

    @media (max-width: 576px) {
      span {
        display: none;
      }
    }
  }

  nav {
    svg {
      margin-right: 6px;
    }

    @media (max-width: 576px) {
      a {
        display: none;
      }
    }
  }
`

const SearchButton = styled.button`
  width: 120px;
  height: 38px;
  line-height: 36px;
  background: transparent;
  border: 1px solid var(--color-black);
  border-radius: 100%;
  font: var(--font-italic);
  text-align: center;
  margin-left: 24px;
`

const Header: FunctionComponent = function () {
  const [isSearch, setSearch] = useState(false)

  return (
    <HeaderContainer active={isSearch}>
      <HeaderWrapper className="flex space items-center">
        <h1>
          <Link to="/">
            ꕤ<span>SoheeTech TIL</span>
          </Link>
        </h1>
        <nav className="flex">
          <a
            href="https://github.com/soheetech"
            target="_blank"
            className="flex items-center"
          >
            <GitHubSVG customStyle="fill-black size-m" /> GitHub
          </a>
          <SearchButton
            type="button"
            onClick={() => {
              setSearch(e => !e)
            }}
          >
            {isSearch ? 'Close' : 'Search'}
          </SearchButton>
        </nav>
      </HeaderWrapper>
      {isSearch && (
        <Search
          fusejs={{
            publicUrl: '',
          }}
        />
      )}
    </HeaderContainer>
  )
}

export default Header
