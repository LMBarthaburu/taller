import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import PerfilAdmin from './pages/PerfilAdmin/PerfilAdmin';
import PerfilCliente from './pages/PerfilCliente/PerfilCliente';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/PerfilUsuario' element={<PerfilCliente/>}/>
        <Route path='/Administracion' element={<PerfilAdmin/>}/>
      </Routes>
    </>
  );
}

export default App;
