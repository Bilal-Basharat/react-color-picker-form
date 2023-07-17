import './App.css';
import { Switch,Route } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import contact from './Components/contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about-us" component={About}/>
        <Route exact path="/contact" component={contact}/>
      </Switch>
     
    </div>
  );
}

export default App;
