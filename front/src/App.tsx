import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/themes/defaultTheme"
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Modal from "./components/Modal";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Upload />
      <Modal />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
