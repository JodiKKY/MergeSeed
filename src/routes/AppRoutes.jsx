import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import  About from "../Pages/About";
import  Contact from "../Pages/Contact";
import Projects from '../Pages/Projects';


function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
      
</Routes>
  );
}

export default AppRoutes;