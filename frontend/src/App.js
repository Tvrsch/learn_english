import {Container} from 'react-bootstrap';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./containers/Home";

const App = () => {
  return(
      <Router>
        <Header />
        <main className='py-3'>
          <Container className='mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  )
}

export default App;
