
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
 

  return (
    
    <BrowserRouter>
    <Navbar  />
    
    <Routes>
     {/* <Route exact path="/home" element= {<Home/>}/> */}
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
