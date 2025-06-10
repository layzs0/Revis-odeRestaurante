import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/TelaInicial/TelaInicial';
import FomularioCadastro from './components/Cadastro/formulariocadastro';
import Cardapio from './components/Cardapio/Cardapio';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/cadastrar' element={<FomularioCadastro />}/>
          <Route path='/cardapio' element={<Cardapio />}/>
        </Routes>
      </BrowserRouter>


  );
}

export default App;
