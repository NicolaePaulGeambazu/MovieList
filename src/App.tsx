import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import WatchList from './pages/WatchList'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </MovieProvider>
      </Layout>
    </Router>
  )
}

export default App
