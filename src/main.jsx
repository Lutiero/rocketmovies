import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
// import { SignIn } from "./pages/SignIn/"
import { MovieInfo } from "./pages/MovieInfo"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MovieInfo />
    </ThemeProvider>
  </React.StrictMode>
)
