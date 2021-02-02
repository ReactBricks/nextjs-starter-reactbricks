import { ReactBricks } from 'react-bricks'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'

import '../css/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactBricks {...config}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
