import React,{Fragment} from 'react';
 import MainLayout from './Component/MainLayout';
 import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Wallet from './Pages/Wallet';


function App() {
  return (
    <BrowserRouter>
    <Switch>
       <MainLayout>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/wallet" component={Wallet}/>
       </MainLayout>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
