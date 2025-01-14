
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import Home from './Pages/Home';
import Certificates from './Pages/Certificates';

function App() {


  return (
    <>
    <Router>
     
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/certificates' element = {<Certificates/>}/>
          {/* agregar más rutas aquí */}
        </Routes>
  
    </Router>
       
    </>
  )
}

export default App


