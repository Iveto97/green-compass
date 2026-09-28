import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Places from './components/Places/Places.jsx'
import PlaceDetails from './components/Details/PlaceDetails.jsx'
import Footer from './components/Footer/Footer.jsx'
import BulgariaMap from './components/Maps/BulgariaMap.jsx'


function App() {

  return (
    <div id='box'>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/places' element={<Places />}></Route>
          <Route path='/place/:placeId/details' element={<PlaceDetails />}></Route>
          <Route path='/map' element={<BulgariaMap />}></Route>
        </ Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
