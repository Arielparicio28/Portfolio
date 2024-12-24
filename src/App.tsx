//import Buttons from "./Components/Buttons";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";
import Titulos from "./Components/Titulos";

function App() {


  return (
  
      <div className="relative bg-background  min-h-screen overflow-hidden">
   <Navbar/>
  <Grid />
  <Titulos />
 {/* <Buttons/> */} 
   </div>
  )
}

export default App
