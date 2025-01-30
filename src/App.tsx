
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import Home from './Pages/Home';
import Certificates from './Pages/Certificates';
import Microsoft_Component from './Pages/Microsoft_Component';
import Cv from './Pages/Cv';



function App() {


  return (
    <>
    <Router>
     
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element = {<Certificates/>}/>
          <Route path = '/components' element ={<Microsoft_Component/>}/>
          <Route path = '/cv' element ={<Cv/>}/>
          {/* agregar más rutas aquí */}
        </Routes>
    </Router>
  
    </>
  )
}

export default App


