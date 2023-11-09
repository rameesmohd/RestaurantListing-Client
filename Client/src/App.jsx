import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Toaster/>
      </BrowserRouter>
  )
}

export default App
