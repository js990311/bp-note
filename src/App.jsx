import { Route, Routes } from 'react-router-dom'
import './App.css'
import BPRecord from './components/record/BPrecord'
import BPHome from './components/BPHome'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='' element={<BPHome />}></Route>
        <Route path="/record" element={<BPRecord />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
