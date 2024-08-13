import { Routes,Route } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Signin from './components/signin';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
