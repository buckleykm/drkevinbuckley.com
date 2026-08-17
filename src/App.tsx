import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Resume from './pages/Resume'
import ArtifactsIndex from './pages/ArtifactsIndex'
import ArtifactDetail from './pages/ArtifactDetail'

const AeroCorpLanding = lazy(() => import('./pages/aerocorp/AeroCorpLanding'))
const AeroCorpResume = lazy(() => import('./pages/aerocorp/AeroCorpResume'))
const AeroCorpValueGraphic = lazy(() => import('./pages/aerocorp/AeroCorpValueGraphic'))
const AeroCorp90DayPlan = lazy(() => import('./pages/aerocorp/AeroCorp90DayPlan'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/artifacts" element={<ArtifactsIndex />} />
        <Route path="/artifacts/:slug" element={<ArtifactDetail />} />
        <Route
          path="/AeroCorp"
          element={
            <Suspense fallback={null}>
              <AeroCorpLanding />
            </Suspense>
          }
        />
        <Route
          path="/AeroCorp/resume"
          element={
            <Suspense fallback={null}>
              <AeroCorpResume />
            </Suspense>
          }
        />
        <Route
          path="/AeroCorp/value-graphic"
          element={
            <Suspense fallback={null}>
              <AeroCorpValueGraphic />
            </Suspense>
          }
        />
        <Route
          path="/AeroCorp/90-day-plan"
          element={
            <Suspense fallback={null}>
              <AeroCorp90DayPlan />
            </Suspense>
          }
        />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
