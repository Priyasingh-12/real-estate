
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './route/home/Home';
 import Login from './route/login/Login';
 import Footer from './components/Footer';


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
    <Navbar  />

    </BrowserRouter>
  
  );
}

export default App;
