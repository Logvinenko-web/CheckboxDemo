import React from 'react';
import './App.css';
 import ButtonAppBar from "./components/ButtonAppBar"
 import StartPage from "./pages/StartPage"
import Portal from './pages/Portal'
import Test from './test'
 import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
 import ContextProvider from './context/context'

function App() {
  return (
    <Router>
      <div className="App">      
        <Switch>

  <Route path="/portal" render={(props)=><ContextProvider><Portal {...props}/></ContextProvider>}/> 
          <Route path="/api" component={ButtonAppBar}/> 
          <Route path="/test" component={Test}/> 

  <Route path="/" render={(props)=><ContextProvider><StartPage {...props}/></ContextProvider>}/>       
        </Switch>
    </div>
    </Router>
  );
}

export default App;
