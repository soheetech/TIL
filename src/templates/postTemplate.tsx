import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { PostPageItemType, PostListItemType } from 'types/postItem.types'
import Template from 'components/common/template'
import PostHead from 'components/post/postHead'
import PostContent from 'components/post/postContent'
import CommentWidget from 'components/post/commentWidget'
import PostPrevNext from 'components/post/postPrevNext'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
  pageContext: {
    prev: PostListItemType
    next: PostListItemType
  }
}

const Comment = styled.div`
  border-top: 1px solid var(--color-gray);
  margin: 3rem 0;
  padding-top: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }
`

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
  pageContext: { prev, next },
}) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, update, categories },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href}>
      <PostHead
        title={title}
        date={date}
        update={update}
        categories={categories}
      />
      <PostContent html={html} />
      <Comment>
        <h3>Comments</h3>
        <CommentWidget />
      </Comment>
      <PostPrevNext
        prevPost={prev ? prev : null}
        nextPost={next ? next : null}
      />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "MMM DD, YYYY")
            update(formatString: "MMM DD, YYYY")
            categories
          }
        }
      }
    }
  }
`
