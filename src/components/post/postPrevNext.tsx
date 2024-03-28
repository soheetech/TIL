import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostListItemType } from 'types/postItem.types'

export type PrevNextProps = {
  prevPost: PostListItemType | null
  nextPost: PostListItemType | null
}

const PostWrapper = styled.ul`
  overflow: hidden;
`

const PostItem = styled.li`
  width: calc(50% - 30px);

  &.left {
    float: left;
  }

  &.right {
    float: right;
    text-align: right;
  }

  a {
    max-width: 100%;

    &:hover strong {
      text-decoration: underline;
    }
  }
`

const PostType = styled.p`
  font: var(--font-italic);
  color: var(--color-graytext);
  margin-bottom: 12px;
`

const Title = styled.p`
  strong {
    -webkit-line-clamp: 1;
    font-weight: 400;
  }
`

const PostPrevNext: FunctionComponent<PrevNextProps> = function ({
  prevPost,
  nextPost,
}) {
  return (
    <PostWrapper>
      {nextPost !== null && (
        <PostItem className="left">
          <Link to={nextPost.node.fields.slug}>
            <PostType>← Previous</PostType>
            <Title>
              <strong className="text-overflow">
                {nextPost.node.frontmatter.title}
              </strong>
            </Title>
          </Link>
        </PostItem>
      )}
      {prevPost !== null && (
        <PostItem className="right">
          <Link to={prevPost.node.fields.slug}>
            <PostType>Next →</PostType>
            <Title>
              <strong className="text-overflow">
                {prevPost.node.frontmatter.title}
              </strong>
            </Title>
          </Link>
        </PostItem>
      )}
    </PostWrapper>
  )
}

export default PostPrevNext
