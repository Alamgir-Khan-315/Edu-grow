import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import themes, { themeList } from './themes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Events from './pages/Events'
import Process from './pages/Process'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [activeTheme, setActiveTheme] = useState('pro')
  const theme = themes[activeTheme]

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ background: theme.bg, color: theme.text, transition: 'background .4s ease, color .4s ease' }}>
        <CustomCursor theme={theme} />
        <Navbar theme={theme} themeList={themeList} activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/services" element={<Services theme={theme} />} />
          <Route path="/events" element={<Events theme={theme} />} />
          <Route path="/process" element={<Process theme={theme} />} />
          <Route path="/plans" element={<Plans theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
        <WhatsAppButton theme={theme} />
      </div>
    </BrowserRouter>
  )
}
