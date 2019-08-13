import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Institute from './components/institute/Institute'
import InstituteDetails from './components/institute/InstituteDetails'
import TranscriptDetails from './components/institute/TranscriptDetails'
import AddTranscript from './components/institute/AddTranscript'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path='/institute' component={Institute} />
            <Route path='/instituteDetails/:id' component={InstituteDetails} />
            <Route path='/transcript/:id' component={TranscriptDetails} />
            <Route path='/addTranscript/:id' component={AddTranscript} />
          </Switch>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
