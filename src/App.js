import {GlobalStyle} from './global/globalStyle'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import VideoSection from './components/VideoSection'
import Services from './components/ServicesSection'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
              <Banner/>
              <VideoSection/>
              <Services/>
            </>
          }/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
