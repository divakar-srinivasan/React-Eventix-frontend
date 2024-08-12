import { Routes,Route } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Signin from './components/signin';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
