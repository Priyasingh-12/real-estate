
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './route/Home';
import  Login from './route/Login';

import './App.css';

function App() {
 

  return (
    
    <BrowserRouter>
    <Navbar  />

    <Routes>
     <Route exact path="/Home" element= {<Home/>}/>
     <Route exact path="/Login" element= {<Login/>}/>

    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
