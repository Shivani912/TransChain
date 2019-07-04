import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Institute from './components/institute/Institute'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/institute' component={Institute} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
