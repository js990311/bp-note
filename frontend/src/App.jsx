import { Route, Routes } from 'react-router-dom'
import './App.css'
import BPRecord from './components/record/BPrecord'
import BPHome from './components/BPHome'
import NotFound from './components/NotFound'
import TodayRecord from './components/today/TodayRecord'
import { RecordsProvider } from './components/record-context/BpRecordContext'

function App() {
  return (
    <div className='container'>
      <RecordsProvider>
        <Routes>
          <Route path='' element={<BPHome />}></Route>
          <Route path="/record/:date/:ampm" element={<BPRecord />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route 
            path='/day/:date' element={  
              <TodayRecord />
            }
          />
        </Routes>
      </RecordsProvider>
    </div>
  )
}

export default App
