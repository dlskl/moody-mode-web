import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./page/start"

const App =()=> {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
