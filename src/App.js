import React from 'react';
import "./App.css"
import Sidebar from './Sidebar';
import Chat from './Chat'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
               <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
