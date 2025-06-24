import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./page/start"
import MainPage from "./page/main"

const App =()=> {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
