import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./page/start"
import MainPage from "./page/main"
import ListPage from "./page/list"
import InsightPage from "./page/insight"

const App =()=> {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/insight" element={<InsightPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
