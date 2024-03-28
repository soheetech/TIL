import React, { FunctionComponent } from 'react'
import { SVGProps } from 'customTypes'

const ArrowUpSVG: FunctionComponent<SVGProps> = function ({ customStyle }) {
  return (
    <svg className={customStyle} version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 " />
    </svg>
  )
}

export default ArrowUpSVG
