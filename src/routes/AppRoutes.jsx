import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import  About from "../Pages/About";
import  Contact from "../Pages/Contact";

function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
</Routes>
  );
}

export default AppRoutes;