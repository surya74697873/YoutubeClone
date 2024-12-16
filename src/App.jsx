import Navbar from "./Components/Navbar/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import Video from "./Video/Video"
import { useState } from "react"

const App = () => {

  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App