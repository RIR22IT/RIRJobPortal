import './App.css';
import Header from './components/Header';
import CoporateRegister from './components/CoporateRegister';
import PersonRegister from './components/PersonRegister';
import RegisterUI from './components/RegisterUI';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path = "/reg" exact component = {CoporateRegister} />
      <Route path = "/PersonReg" exact component = {PersonRegister} />
      <Route path = "/reg1" exact component = {RegisterUI} />
    </div>
    </Router>
  );
}

export default App;
