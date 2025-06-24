import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./page/start"
import MainPage from "./page/main"
import ListPage from "./page/list"

const App =()=> {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/list" element={<ListPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
