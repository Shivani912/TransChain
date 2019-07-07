import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Institute from './components/institute/Institute'
import InstituteDetails from './components/institute/InstituteDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/Institute' component={Institute} />
          <Route path='/InstituteDetails/:id' component={InstituteDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
