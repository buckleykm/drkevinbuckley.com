import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Resume from './pages/Resume'
import CaseStudiesIndex from './pages/CaseStudiesIndex'
import CaseStudyDetail from './pages/CaseStudyDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
