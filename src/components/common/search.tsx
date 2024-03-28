import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  useContext,
} from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { useGatsbyPluginFusejs } from 'react-use-fusejs'
import { AppContext } from '../../context/app'

type SearchProps = {
  fusejs: {
    publicUrl: string
  }
}

type SearchItem = {
  id: string
  path: string
  title: string
  summary: string
  categories: string
}

const SearchContainer = styled.div`
  height: calc(100vh - 78px);
  padding-top: 120px;
`

const SearchFormWrapper = styled.p`
  font-size: 2rem;
  margin-bottom: 60px;
`

const SearchForm = styled.input`
  width: 95%;
  background: transparent;
  border: 0;
  text-align: center;
`

const ResultTitle = styled.p`
  font: var(--font-italic);
  color: var(--color-graytext);
  border-bottom: 1px solid var(--color-gray);
  padding-bottom: 12px;
  margin-bottom: 32px;
`

const ResultListWrapper = styled.ul`
  height: 30vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 5px;
  }
`

const ResultItem = styled.li`
  width: 90%;
  font-size: var(--font-large);
  -webkit-line-clamp: 1;
  margin-bottom: 24px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const NoResults = styled.p`
  text-align: center;
  color: var(--color-graytext);
  padding: 14vh 0;
`

const EmptyInput = styled.p`
  font-size: 3rem;
  text-align: center;
  color: var(--color-gray);
  padding: 11vh 0;
`

const Search: FunctionComponent<SearchProps> = function () {
  const data = useStaticQuery<SearchProps>(graphql`
    {
      fusejs {
        publicUrl
      }
    }
  `)

  const [query, setQuery] = useState<string>('')
  const { fusejs, setFusejs } = useContext(AppContext)
  const result = useGatsbyPluginFusejs<SearchItem>(query, fusejs)
  const [isFetching, setIsFetching] = useState(false)

  const fetching = useRef(false)

  useEffect(() => {
    if (!fetching.current && !fusejs && query) {
      fetching.current = true

      fetch(data.fusejs.publicUrl)
        .then(res => res.json())
        .then(json => setFusejs(json))
        .finally(() => setIsFetching(false))
    }
  }, [fusejs, query, setFusejs])

  return (
    <SearchContainer className="contents-wrapper">
      <SearchFormWrapper className="flex space">
        <span>(</span>
        <SearchForm
          type="text"
          value={query}
          placeholder="Search"
          maxLength={20}
          onChange={e => setQuery(e.target.value)}
        />
        <span>)</span>
      </SearchFormWrapper>
      <ResultTitle>Search Results</ResultTitle>
      {!isFetching && query && !result.length ? (
        <NoResults>검색 결과가 없습니다.</NoResults>
      ) : !result.length ? (
        <EmptyInput>(╭ರ_•́)</EmptyInput>
      ) : (
        <ResultListWrapper>
          {result.map(({ item }: any) => (
            <ResultItem key={item.id} className="text-overflow">
              <Link to={item.path}>{item.title}</Link>
            </ResultItem>
          ))}
        </ResultListWrapper>
      )}
    </SearchContainer>
  )
}

export default Search
