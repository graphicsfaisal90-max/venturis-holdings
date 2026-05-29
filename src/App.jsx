import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import VenturisInteriors from './pages/services/VenturisInteriors'
import VenturisFacilities from './pages/services/VenturisFacilities'
import VenturisRealtors from './pages/services/VenturisRealtors'
import VenturisPartners from './pages/services/VenturisPartners'
import VenturisWheels from './pages/services/VenturisWheels'
import VenturisTourism from './pages/services/VenturisTourism'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Careers from './pages/Careers'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/interiors" element={<VenturisInteriors />} />
        <Route path="services/facilities" element={<VenturisFacilities />} />
        <Route path="services/realtors" element={<VenturisRealtors />} />
        <Route path="services/partners" element={<VenturisPartners />} />
        <Route path="services/wheels" element={<VenturisWheels />} />
        <Route path="services/tourism" element={<VenturisTourism />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    </Routes>
  )
}
