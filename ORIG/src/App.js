import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Body from './components/Body'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ Body } />
      </div>
    </Router>
  );
}

export default App;
