import { ReactBricks } from "react-bricks/frontend"
import type { AppProps } from "next/app"
import config from "../react-bricks/config"

import "../css/style.css"
import { useState } from "react"

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === "undefined" ? "" : localStorage.getItem("color-mode")
  const [colorMode, setColorMode] = useState(savedColorMode || "light")
  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light"
    setColorMode(newColorMode)
    localStorage.setItem("color-mode", newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === "dark",
    toggleColorMode,
    contentClassName: `${colorMode} ${
      colorMode === "dark" ? "dark darkContentClass" : "light whiteContentClass"
    }`,
  }

  return (
    <ReactBricks {...reactBricksConfig}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
