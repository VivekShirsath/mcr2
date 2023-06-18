import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import './App.css'

function App() {
  return (
   <Routes>
    <Route>
      <Route path="/"element={<Home/>}/>
      <Route path="/archive"element={<Archive/>}/>
    </Route>
   </Routes>
  )
}

export default App
