//import react from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Index'
import NavBar from './components/shared/NavBar';


const errorMessage = () => {
  return (
    <div>
      Error: Not Found
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={errorMessage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
