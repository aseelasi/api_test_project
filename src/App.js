import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import ProductListPage from './components/ProductListPage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Switch>
              <Route exact path='/' component={ProductListPage}/>
              <Route path='/register' component={RegistrationPage}/>
              <Route path='/login' component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
