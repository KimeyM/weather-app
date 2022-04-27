import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
