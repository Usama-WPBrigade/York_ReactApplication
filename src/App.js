import '../src/styling/main.scss';
import Header from './website_components/header';
import Footer from './website_components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import BInRental from './pages/bin-rental'
import Environment from './pages/envirnment'
import Infrastructure from './pages/infrastructure'
import TransferStation from './pages/ts'
import Careers from './pages/careers'
import Locations from './pages/locations'
import Terms from './pages/terms'
import PrivacyPolicy from './pages/privacypolicy'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/environmental" element={<Environment/>} />
            <Route path="/infrastructure" element={<Infrastructure/>} />
            <Route path="/bin-rental" element={<BInRental/>} />
            <Route path="/transfer-stations" element={<TransferStation/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/locations" element={<Locations/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          </Routes> 
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;