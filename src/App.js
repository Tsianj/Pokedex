import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemons from './Pages/Pokemons';
import NavBar from './Components/NavBar';
import PokemonGen from './Pages/PokemonGen';
import PokemonDetails from './Pages/PokemonDetails';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path={"/"} element={<Pokemons />}/>
          <Route path={"/pokemon/details"} element={<PokemonDetails />}/>
          <Route path={"Generation/:name"} element={<PokemonGen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
