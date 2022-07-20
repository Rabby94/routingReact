import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './routing/pages/Home'
import Error from './routing/pages/Error';
import About from './routing/pages/About';
import Navbar from './routing/Navber'
import Course from './routing/pages/Course';

function App() {
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = "/" element ={ <Home/>}/>
        <Route path = "/course" element = { <Course/>} />
        <Route path = "/about" element = { <About/>} />
        <Route path = "/about/ceo" element = {""}/>
        <Route path ="*" element = { <Error/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
