// @flow
import React, { type Node, type Element } from 'react'
import LOGO_STATUSES, {
  Joy,
  Loved,
  Sexy,
  Smiling,
  Sunglasses,
  Tongue,
} from './statuses'

export const getIconByStatus = (status: $Keys<typeof LOGO_STATUSES>): any => {
  switch (status) {
    case LOGO_STATUSES.JOY:
      return <Joy />
    case LOGO_STATUSES.LOVED:
      return <Loved />
    case LOGO_STATUSES.SEXY:
      return <Sexy />
    case LOGO_STATUSES.SMILING:
      return <Smiling />
    case LOGO_STATUSES.SUNGLASSES:
      return <Sunglasses />
    case LOGO_STATUSES.TONGUE:
      return <Tongue />
  }
}

const Logo = (): Element<'svg'> => {
  const statuses: Array<Object> = Object.values(LOGO_STATUSES).map(
    (status) => status
  )
  const [status, setStatus] = React.useState('')

  React.useEffect(() => {
    setStatus(statuses[Math.floor(Math.random() * statuses.length)])
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="gitmoji-logo"
      height="137px"
      width="457px"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 457 137"
    >
      <title>gitmoji</title>
      <g id="gitmoji" fillRule="evenodd" fill="none">
        <g id="Logo" transform="translate(-270 -430)">
          <g id="gitmoji" transform="translate(270 430)">
            <path
              d="m17.5 106c0.6 4 2.4 7 5.3 10 2.9 2 6.6 4 11.2 4 6.1 0 10.7-2 14-5s4.9-8 4.9-15.1v-5.1c-1.5 2.3-3.8 4.4-7.1 6.2-3.2 2-7.5 3-12.6 3-4.7 0-9.1-1-13.1-3-4.1-1.5-7.6-3.9-10.5-7-2.91-3-5.22-6.7-6.9-10.8-1.68-4.2-2.52-8.8-2.52-13.8 0.004-4.7 0.82-9.1 2.45-13.3s3.89-7.9 6.77-11c2.9-3.2 6.3-5.7 10.4-7.5 4-1.8 8.5-2.7 13.4-2.7 5.6 0 10.1 1 13.4 3 3.2 2 5.5 4.2 6.7 6.6v-8.3h18.5v63.2c0 4.6-0.7 9.6-2.1 13.6-1.4 5-3.6 9-6.6 12-3 4-6.8 6-11.5 8s-10.4 4-17 4c-4.9 0-9.3-1-13.3-3-4-1-7.5-3-10.5-5-2.94-3-5.34-5-7.16-8-1.82-4-2.98-7-3.46-10l17.3-5zm19-18.6c4.9 0 8.9-1.6 12-4.9 3.1-3.2 4.7-7.6 4.7-13.1s-1.7-9.8-4.9-13c-3.3-3.2-7.2-4.8-11.8-4.8-2.4 0-4.7 0.4-6.7 1.2-2.1 0.8-3.9 2-5.4 3.6-1.6 1.6-2.8 3.5-3.6 5.7-0.9 2.2-1.3 4.6-1.3 7.3 0 5.6 1.6 10 4.7 13.2 3.2 3.2 7.3 4.8 12.3 4.8zm54.7 19.6v-70.8h18.8v70.8h-18.8zm-2.3-94c0-3.39 1.1-6.22 3.4-8.53 2.3-2.3 5.1-3.45 8.7-3.45 3 0 6 1.15 8 3.45 2 2.31 4 5.14 4 8.53 0 3.1-2 5.9-4 8.2s-5 3.4-8 3.4c-3.6 0-6.4-1.1-8.7-3.4s-3.4-5.1-3.4-8.2zm65.1 23.2h15v16.9h-15v29.7c0 3.1 1 5.2 2 6.4 2 1.2 4 1.8 7 1.8 1 0 2 0 3-0.1s2-0.3 3-0.5v15.6c-1 1-3 1-4 1-2 1-4 1-7 1-7 0-13-2-17-6-4-3.6-6-9-6-15.9v-33h-12v-16.9h3c4 0 7-1.1 8-3.3 2-2.1 3-4.8 3-8v-9.9h17v21.2zm30 70.8v-70.8h18v8.6c1-1.7 2-3.3 4-4.6 1-1.4 3-2.5 5-3.3 2-0.9 4-1.6 6-2 2-0.5 4-0.8 6-0.8 5 0 9 1 13 3.1 3 2 6 4.9 8 8.7 3-4.3 6-7.3 10-9.1s8-2.7 12-2.7 7 0.5 10 1.5c3 1.1 6 2.7 8 4.9 3 2.2 4 5 6 8.4 1 3.4 2 7.5 2 12.2v45.9h-19v-42c0-3.9 0-7.1-2-9.6-2-2.6-6-3.8-10-3.8s-7 1.3-10 4.1c-2 2.7-3 6-3 9.8v41.5h-19v-42c0-3.9-1-7.1-3-9.6-2-2.6-5-3.8-10-3.8-4 0-7 1.3-9 4-3 2.7-4 6-4 9.9v41.5h-19zm159-15.3c3 0 5-0.4 7-1.3 2-0.8 4-2.1 6-3.8 1-1.7 3-3.7 4-6.2s1-5.5 1-8.8c0-3.4 0-6.3-1-8.8s-3-4.6-4-6.3c-2-1.7-4-2.9-6-3.8s-4-1.3-7-1.3c-2 0-4 0.4-6 1.3-3 0.9-5 2.1-6 3.8-2 1.7-3 3.8-4 6.3s-2 5.4-2 8.8c0 3.3 1 6.3 2 8.8s2 4.5 4 6.2c1 1.7 3 3 6 3.8 2 0.9 4 1.3 6 1.3zm0-57.7c6 0 11 0.9 15 2.8 5 1.9 9 4.5 12 7.8s6 7.2 8 11.9c2 4.6 2 9.6 2 15.1 0 5.4 0 10.5-2 15-2 4.6-5 8.5-8 11.9-3 3.5-7 5.5-12 7.5-4 2-9 3-15 3-5 0-10-1-14-3-5-2-9-4-12-7.5-4-3.4-6-7.3-8-11.9-2-4.5-3-9.6-3-15 0-5.5 1-10.5 3-15.1 2-4.7 4-8.6 8-11.9 3-3.3 7-5.9 12-7.8 4-1.9 9-2.8 14-2.8zm53 2.2h19v76.8c0 4-1 7-2 10-1 2-2 5-4 7s-4 4-7 5-6 2-9 2-6-1-8-1c-2-1-3-1-3-1v-16h2c1 1 2 1 4 1 3 0 5-1 6-3 1-1 2-3 2-6v-74.8zm-3-23.4c0-3.34 1-6.17 4-8.47 2-2.31 5-3.46 8-3.46 3 0.002 6 1.15 9 3.46 2 2.3 3 5.13 3 8.47 0 3.3-1 6-3 8.3-3 2.3-6 3.4-9 3.4s-6-1.1-8-3.4c-3-2.3-4-5-4-8.3zm42 94.2v-70.8h19v70.8h-19zm-2-94c0-3.39 1-6.22 3-8.53 3-2.3 5-3.45 9-3.45 3 0 6 1.15 8 3.45 2 2.31 4 5.14 4 8.53 0 3.1-2 5.9-4 8.2s-5 3.4-8 3.4c-4 0-6-1.1-9-3.4-2-2.3-3-5.1-3-8.2z"
              fill="#000"
            />
            {getIconByStatus(status)}
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Logo
