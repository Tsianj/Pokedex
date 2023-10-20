import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemons from './Pages/Pokemons';
import NavBar from './Components/NavBar';
import PokemonGen from './Pages/PokemonGen';
import PokemonDetails from './Pages/PokemonDetails';
import PokemonVersions from './Pages/PokemonVersion';
import { Suspense } from 'react';
import Loader from './Components/Loader';


function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path={"/"} element={<Pokemons />}/>
            <Route path={"/pokemon/details"} element={<PokemonDetails />}/>
            <Route path={"Generation/:name"} element={<PokemonGen />} />
            <Route path={"Version/:name"} element={<PokemonVersions />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
