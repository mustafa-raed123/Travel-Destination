
import './App.css';
import Home from '../src/components/home/Home'
import { Route, Routes,Router } from 'react-router';
import ToursDatails from './components/tourdatails/ToursDatails';

function App() {
  return (
    <>
      {/* <Home></Home> */}
      <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      
      </Routes>
      <Routes>
      <Route path='/city/:id' element = {<ToursDatails></ToursDatails>}></Route>
      
      </Routes>
      
    </>
  );
}

export default App;