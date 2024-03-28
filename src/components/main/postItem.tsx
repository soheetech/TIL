import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/postItem.types'
import TagSVG from '../../assets/tag'
import ClockSVG from '../../assets/clock'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled.article`
  & > hr {
    margin: 32px auto;
  }

  &:first-of-type {
    & > hr {
      display: none;
    }
  }
`

const Title = styled.h2`
  font-size: var(--font-large);
  font-weight: normal;
  margin-top: 12px;
  margin-bottom: 8px;
  -webkit-line-clamp: 1;
`

const Date = styled.p`
  font-size: var(--font-small);
  color: var(--color-graytext);
`

const CategoryWrapper = styled.div`
  font-size: var(--font-small);
  color: var(--color-graytext);
  margin-top: 30px;
  column-gap: 8px;

  svg {
    margin-right: 4px;
  }

  & > p {
    padding: 2px 0;
  }
`

const CategoryItem = styled.span`
  &::after {
    content: ',';
    margin-right: 4px;
  }

  &:last-of-type {
    margin-right: 0;

    &::after {
      content: none;
    }
  }
`

const Summary = styled.p`
  color: var(--color-graytext);
  -webkit-line-clamp: 2;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  update,
  categories,
  summary,
  link,
}) {
  return (
    <PostItemWrapper>
      <hr />
      <Link to={link}>
        <Date>{date}</Date>
        <Title className="text-overflow">{title}</Title>
        <Summary className="text-overflow">{summary}</Summary>
        <CategoryWrapper className="flex items-center wrap">
          <p className="flex items-center wrap">
            <TagSVG customStyle="fill-gray stroke-gray size-s" />
            {categories.map(item => (
              <CategoryItem key={item}>{item}</CategoryItem>
            ))}
          </p>
          {date !== update && (
            <p className="flex items-center">
              <ClockSVG customStyle="fill-gray size-s" />
              Last Updated {update}
            </p>
          )}
        </CategoryWrapper>
      </Link>
    </PostItemWrapper>
  )
}

export default PostItem
