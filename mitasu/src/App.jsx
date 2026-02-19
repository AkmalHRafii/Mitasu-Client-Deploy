import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"
import MyBookmark from "./pages/MyBookmark"
import BaseLayout from "./component/BaseLayout"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route element={<BaseLayout />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/mybookmark" element={<MyBookmark />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
