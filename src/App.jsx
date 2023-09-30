import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './components/Tasks'
import CreateTask from './components/CreateTask'
import UpdateTask from './components/UpdateTask'
import ViewTask from './components/ViewTask'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tasks />}></Route>
        <Route path='/create' element={<CreateTask />}></Route>
        <Route path='/update/:id' element={<UpdateTask />}></Route>
        <Route path='/view' element={<ViewTask />}></Route>
        
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
