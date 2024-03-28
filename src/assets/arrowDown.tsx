import React, { FunctionComponent } from 'react'
import { SVGProps } from 'customTypes'

const ArrowDownSVG: FunctionComponent<SVGProps> = function ({ customStyle }) {
  return (
    <svg version="1.1" viewBox="0 0 512 512" className={customStyle}>
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}

export default ArrowDownSVG
