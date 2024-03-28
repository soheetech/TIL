import React, { FunctionComponent } from 'react'
import { SVGProps } from 'customTypes'

const ClockSVG: FunctionComponent<SVGProps> = function ({ customStyle }) {
  return (
    <svg id="icon" viewBox="0 0 32 32" className={customStyle}>
      <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z" />
      <polygon points="20.59 22 15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22" />
      <rect
        data-name="&lt;Transparent Rectangle&gt;"
        height="32"
        id="_Transparent_Rectangle_"
        width="32"
        fill="none"
      />
    </svg>
  )
}

export default ClockSVG
