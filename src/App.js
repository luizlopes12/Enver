import {GlobalStyle} from './styles/globalStyle'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Header/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
