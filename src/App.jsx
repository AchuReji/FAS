import React, { Suspense, useEffect, useState } from 'react'
import Home from './Pages/Home'
// import { Nav } from './componments/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './componments/Footer';
import { PropagateLoader } from 'react-spinners'
import ScrollToTop from './componments/ScrollToTop';
import CustomCursor from './componments/CustomCursor';
import Careers from './Pages/Careers';
import Howwework from './Pages/Howwework';
import Navbar from './componments/ui/Navbar';
import Loader from './componments/Loader';
import SocialMedia from './componments/Socialmedia/SocialMedia';
import NotFound from './componments/NotFound';
import ServiceList from './componments/ServicesPages/ServiceList';







function App() {
  
const [loading, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simulate load
  }, []);

  
  return loading ?<Loader /> : (
    <>

<Suspense fallback="Loading translations...">
    <BrowserRouter  >
<CustomCursor/>

    {/* <Nav/> */}
<Navbar/>

     <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/services" element={<Services/>}/> 
      <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/WhyChooseus" element={<Howwework/>}/>
    <Route path="/servicelist" element={<ServiceList/>}/>
    <Route path="*" element={<NotFound />} />

    </Routes>
    <ScrollToTop/>
    
    <Footer/>
    
    <SocialMedia/>
    </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
