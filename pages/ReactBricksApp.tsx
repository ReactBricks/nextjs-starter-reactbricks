import { useEffect, useState } from "react"
import { ReactBricks } from "react-bricks/frontend"
import type { AppProps } from "next/app"
import config from "../react-bricks/config"
import { useTheme } from "next-themes"

const ReactBricksApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === "undefined" ? "" : localStorage.getItem("color-mode")

  const [colorMode, setColorMode] = useState(savedColorMode || "light")

  const { setTheme } = useTheme()

  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light"
    setColorMode(newColorMode)
    localStorage.setItem("color-mode", newColorMode)

    setTheme(newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === "dark",
    toggleColorMode,
    contentClassName: `${colorMode} ${
      colorMode === "dark" ? "dark darkContentClass" : "light whiteContentClass"
    }`,
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <ReactBricks {...reactBricksConfig}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default ReactBricksApp
