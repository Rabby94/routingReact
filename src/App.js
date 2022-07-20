import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './routing/Navber';
import Error from './routing/pages/Error';
import About from './routing/pages/About';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={ <Home/>}/>
        <Route path = " /about" element = { <About/>} />
        <Route path ="*" element = { <Error/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
