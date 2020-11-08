import TimeAttackPage from './components/TimeAttackPage'
import HomePage from './components/HomePage'
import ForzaPage from './components/ForzaPage'
import DriftPage from './components/DriftPage'
import Menu from './components/Menu'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}