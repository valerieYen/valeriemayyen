import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import './stylesheets/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/valeriemayyen" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/valeriemayyen/work" element={<Work />}/> 
          <Route path="/valeriemayyen/about" element={<About />}/> 
          <Route path="*"
            element={
              <div className="">
                <p className="">Theres nothing here!</p>
                <Link to="/valeriemayyen/" className="">
                  Back to Home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
