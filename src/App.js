import React from 'react';
import './App.css';
import SignInSide from './SignInSide.js'
import Dashboard from './dashboard/Dashboard.js'
import { Route, Link } from 'react-router-dom';

function App() {

  const signIn = () => (
    <SignInSide />
  );
  const dashboard = () => (
    <Dashboard />
  );

  return (
    <div className="App">
        <Route path="/home" component={signIn}/>
        <Route path="/dashboard" component={dashboard}/>
    </div>
  );
}

export default App;
