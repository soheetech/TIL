import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 12px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 2.5rem;
  }

  * + h4,
  * + h5,
  * + h6 {
    margin-top: 1.5rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid var(--color-black);
    font-weight: 400;
  }

  strong {
    font-weight: 500;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 8px 0;
  }

  li {
    list-style: auto;
  }

  // Adjust Horizontal Rule style
  hr {
    margin: 2.5rem 0;
  }

  // Adjust Link Element Style
  a {
    color: inherit;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
