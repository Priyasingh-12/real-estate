
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './route/home/Home';
 import Login from './route/login/Login';

import './App.css';

function App() {
 

  return (
    
    <BrowserRouter>
    <Navbar  />

    <Routes>
    <Route exact path="/" element= {<Home/>}/>
     <Route exact path="/Home" element= {<Home/>}/>
     {/* <Route exact path="/Login" element= {< Signup/>}/> */}
     <Route exact path="/Login" element= {< Login/>}/>


    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
