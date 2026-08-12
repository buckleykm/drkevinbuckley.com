import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Resume from './pages/Resume'
import ArtifactsIndex from './pages/ArtifactsIndex'
import ArtifactDetail from './pages/ArtifactDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/artifacts" element={<ArtifactsIndex />} />
        <Route path="/artifacts/:slug" element={<ArtifactDetail />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
