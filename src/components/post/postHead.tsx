import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import TagSVG from '../../assets/tag'
import ClockSVG from '../../assets/clock'

export type PostHeadInfoProps = {
  title: string
  date: string
  update: string
  categories: string[]
}

const PostHeadWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray);
  padding-bottom: 2rem;
  margin-bottom: 2.5rem;
`

const Title = styled.h2`
  font-size: 42px;
  font-weight: normal;
  line-height: 1.25;
  overflow-wrap: break-word;
  word-break: break-word;
`

const PostData = styled.div`
  font-size: var(--font-small);
  color: var(--color-graytext);
  margin-top: 3rem;
  column-gap: 8px;

  svg {
    margin-right: 4px;
  }

  & > p {
    padding: 2px 0;
  }
`

const Date = styled.p`
  font-size: var(--font-small);
  color: var(--color-graytext);
  margin-bottom: 20px;
`

const PostHead: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  update,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <PostData className="flex items-center wrap">
        <p className="flex items-center">
          <TagSVG customStyle="fill-gray stroke-gray size-s" />
          {categories.join(', ')}
        </p>
        {date !== update && (
          <p className="flex items-center update">
            <ClockSVG customStyle="fill-gray size-s" />
            Last Updated {update}
          </p>
        )}
      </PostData>
    </PostHeadWrapper>
  )
}

export default PostHead
