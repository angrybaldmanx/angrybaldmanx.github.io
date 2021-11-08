import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from './components/GameList';
import Downloads from './components/Dowloads';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <GameList />
          </Route>
          <Route exact path="/Downloads">
            <Downloads />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;