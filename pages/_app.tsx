import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import ReactBricksApp from "./ReactBricksApp"

import "../css/style.css"

const MyApp = (props: AppProps) => {
  return (
    <ThemeProvider attribute='class' storageKey='color-mode'>
      <ReactBricksApp {...props}></ReactBricksApp>
    </ThemeProvider>
  )
}

export default MyApp
