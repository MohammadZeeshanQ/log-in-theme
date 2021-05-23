//import react from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Index'


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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={errorMessage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
