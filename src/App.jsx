import { Route, Routes } from 'react-router-dom'
import './App.css'
import BPRecord from './components/record/BPrecord'
import BPHome from './components/BPHome'
import NotFound from './components/NotFound'
import TodayRecord from './components/record/TodayRecord'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='' element={<BPHome />}></Route>
        <Route path="/record" element={<BPRecord />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route 
          path='/day/:date' element={
            <TodayRecord />
          }
        />
      </Routes>
    </div>
  )
}

export default App
