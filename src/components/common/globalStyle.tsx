import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Sans+KR:wght@100..900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  :root {
    --bg-default: #fffacd;
    --bg-gradient: linear-gradient(to bottom, #fffacd 60%, transparent);
    --bg-search: #fbfaf7;
    --color-black: #242424;
    --color-gray: rgba(0, 0, 0, 0.1);
    --color-graytext: #6b6b6b;
    --color-green: #77b255;
    --font-serif: 'Lora', serif;
    --font-italic: italic 500 1rem 'Lora', serif;
    --font-small: 0.875rem;
    --font-large: 1.25rem;
    --size-contents: 728px;
    --size-padding: 0 24px;
  }

  /* reset css */

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    font: 400 16px 'Roboto', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    letter-spacing: -0.011em;
    background: var(--bg-default);
    color: var(--color-black);
  }

  li {
    list-style: none;
  }

  a,
  button {
    font: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  input {
    font: inherit;
  }

  hr {
    height: 1px;
    background: var(--color-gray);
    border: 0;
  }

  img {
    max-width: 100%;
  }

  ::selection {
    background: #fff;
  }

  /* custom style */

  // layout
  .contents-wrapper {
    width: 100%;
    max-width: var(--size-contents);
    padding: var(--size-padding);
    margin-left: auto;
    margin-right: auto;
  }

  .flex {
    display: flex;

    &.space {
      justify-content: space-between;
    }

    &.items-center {
      align-items: center;
    }

    &.wrap {
      flex-wrap: wrap;
    }
  }

  // text overflow
  .text-overflow {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-box-orient: vertical;
  }

  // icon
  svg {
    &.fill-black {
      fill: var(--color-black);
    }

    &.fill-gray {
      fill: var(--color-graytext);
    }

    &.stroke-black {
      path {
        stroke: var(--color-black);
      }
    }

    &.stroke-gray {
      path,
      circle,
      polyline {
        stroke: var(--color-graytext);
      }
    }

    &.size-s {
      width: 16px;
    }

    &.size-m {
      width: 24px;
    }
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
