import './App.css';

//pages
import Dashboard from './pages/Dashboard';
//import CoinDetail from './pages/CoinDetail';
import Navbar from './components/Navbar/Navbar';

//react components
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';

function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/getAll' element={<Dashboard />}/>   
          <Route path='/' element={<Homepage />}/>   
      {/*<Route path='/item/:itemId' element={<CoinDetail />}/>   */}
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
