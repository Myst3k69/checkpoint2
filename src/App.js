import React, { useEffect, useState } from 'react';
import GameList from "./GameList"
import Screenshots from "./Screenshots"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {




  return (
    <>
    <h1>GAME LIST</h1>

    <Router>


<Switch>
  <Route exact path='/'>

  <GameList />
  </Route>
  <Route path='/screenshots/:id' component={Screenshots} />
 
  
   
</Switch>
</Router>


    </>
  );
}

export default App;
