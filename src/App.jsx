import React, { useEffect, useState } from 'react'
import Navbar from './componments/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import WhyChooseus from './Pages/WhyChooseus'
import Footers from './componments/Footers'
import Serviceslist from './componments/Serviceslist'
import Navservices from './Pages/Navservices'
import ScrollToTop from './componments/ScrollToTop'
import WhatsAppChat from './componments/WhatsAppChat'
import Page from './componments/Blogpage/Page'
import Gallery from './Pages/Gallery'
import Ajith from './componments/Ceopages/Ajith'
import Susan from './componments/Ceopages/Susan'
import Loader from './componments/Loader'









function App() {
 const [loading, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simulate load
  }, []);

  
  return loading ?<Loader /> : (
    <>

<BrowserRouter>
{/* 1. Add this here to handle the scroll reset */}
      <ScrollToTop/>
    {/* <Nav/> */}
<Navbar/>
<Routes>
 <Route path="/" element={<Home/>}/> 
  <Route path="/blog" element={<Blog/>}/> 
  <Route path="/aboutus" element={<AboutPage/>}/> 
    <Route path="/Services" element={<Navservices/>}/> 
   <Route path="/whychooseus" element={<WhyChooseus/>}/>
    <Route path="/contact" element={<Contact/>}/> 
    <Route path="/gallery" element={<Gallery/>}/>
    {/* services */}
    <Route path="/servicelist" element={<Serviceslist/>}/>
    {/* blogpages */}
    <Route path="/blogpage" element={<Page/>}/>
    {/* CEO page */}
    <Route path="/Ajithsam" element={<Ajith/>}/>
    <Route path="/Susan" element={<Susan/>}/>
</Routes>
<WhatsAppChat/>
 <Footers/>
     </BrowserRouter>
    
    </>
  )
}

export default App
