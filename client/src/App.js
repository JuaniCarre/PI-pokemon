import {Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar'
import Pokemons from './components/Home/Pokemons';
import PokemonDetail from './components/PokemonDetail/pokemonDetail';
import Landing from './components/Landing/landing'
import AddPokemon from './components/AddPokemon/addPokemon'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/home/:id">
          <NavBar/>
          <PokemonDetail/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/home/hp'>
          <NavBar/>
          <Pokemons/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/home">
          <NavBar/>
          <Pokemons/>
        </Route>
      </Switch>


      <Switch>
        <Route path="/create">
          <NavBar/>
          <AddPokemon/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
