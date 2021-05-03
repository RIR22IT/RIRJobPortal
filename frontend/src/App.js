import './App.css';
import Header from './components/Header';
import CoporateRegister from './components/CoporateRegister';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path = "/reg" exact component = {CoporateRegister} />
    </div>
    </Router>
  );
}

export default App;
