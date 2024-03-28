import React, { FunctionComponent, ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import ArrowDownSVG from '../../assets/arrowDown'
import ArrowUpSVG from '../../assets/arrowUp'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
  onClick: () => void
} & CategoryItemProps

const CategoryContainer = styled.div`
  position: relative;
`

const CategoryButtonWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray);
`

const CategoryButton = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  padding: 16px 0;
`

const CategoryListWrapper = styled.ul`
  position: absolute;
  background: var(--bg-default);
  padding: 45px 0;
`

const CategoryItem = styled.li`
  padding: 5px 0;

  &::after {
    content: '';
    display: inline-block;
    height: 18px;
    transform: rotate(20deg) translateY(2px);
    border-right: 1px solid var(--color-gray);
    margin: 0 12px;
  }

  &:last-of-type {
    &::after {
      border: 0;
    }
  }
`

const CategoryItemLink = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  font: ${({ active }) => (active ? 'italic' : 'normal')} var(--font-large)
    var(--font-serif);
  color: ${({ active }) => (active ? 'inherit' : 'var(--color-graytext)')};

  &:hover {
    color: inherit;
  }
`

const PostCount = styled.sup`
  margin-left: 4px;
  color: rgba(0, 0, 0, 0.5);
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  const [isCategories, setCategories] = useState(false)

  return (
    <CategoryContainer>
      <CategoryButtonWrapper>
        <CategoryButton
          type="button"
          className="flex space items-center"
          onClick={() => {
            setCategories(e => !e)
          }}
        >
          {selectedCategory}
          {isCategories ? (
            <ArrowUpSVG customStyle="fill-black size-s" />
          ) : (
            <ArrowDownSVG customStyle="fill-black size-s" />
          )}
        </CategoryButton>
      </CategoryButtonWrapper>
      {isCategories && (
        <CategoryListWrapper className="flex wrap">
          {Object.entries(categoryList).map(([name, count]) => (
            <CategoryItem key={name}>
              <CategoryItemLink
                to={`/?category=${name}`}
                active={name === selectedCategory}
                key={name}
                onClick={() => {
                  setCategories(e => !e)
                }}
              >
                {name}
                <PostCount>({count})</PostCount>
              </CategoryItemLink>
            </CategoryItem>
          ))}
        </CategoryListWrapper>
      )}
    </CategoryContainer>
  )
}

export default CategoryList
