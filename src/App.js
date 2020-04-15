import React from 'react';
import MainLayout from './Component/MainLayout';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Report from './Pages/Report';


function App() {
  return (
    <BrowserRouter>
    <Switch>
       <MainLayout>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/report" component={Report}/>
       </MainLayout>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
