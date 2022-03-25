import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PlayerDetail from './components/PlayerDetail/PlayerDetail';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Header from './view/Header/Header';
import Home from './view/Home/Home';
import Players from './view/Players/Players';
import Teams from './view/Teams/Teams';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={'/players/:id'}>
          <PlayerDetail />
        </Route>
        <Route path={'/teams/:id'}>
          <TeamDetail />
        </Route>
        <Route path={'/players'}>
          <Players />
        </Route>
        <Route path={'/teams'}>
          <Teams />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
