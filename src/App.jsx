import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CatalogoDeFilmes' element={<Home/>}/>
          <Route path='details/:id' element={<Details />}/>
          <Route path='/Search/:id' element={<Search/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
