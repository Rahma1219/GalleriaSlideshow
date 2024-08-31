
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Pages/Layout/Layout'
import Artist from './Pages/Artist/Artist'
import Thumbnail from './Components/Thumbnail/Thumbnail'







function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/artist/:Data" element={<Artist />}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
