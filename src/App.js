import React from 'react';
import MainLayout from './Layout/MainLayout';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Report from './Pages/Report';
import Schedule from './Pages/Schedule';
import MyRequest from './Pages/MyRequest';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/report" component={Report}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/request" component={MyRequest}/>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
