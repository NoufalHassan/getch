import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { GtecHome } from './pages/GtecHome'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<GtecHome/>} />
      </Routes>
     </Router>

    </>
  )
}

export default App
