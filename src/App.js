import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import '../src/App.css';
import Admin from './screen/Admin';
import Forgetpassword from './screen/userScreen/Forgetpassword';
import Login from './screen/Login';
import Register from './screen/userScreen/Register';
import Userlogin from './screen/userScreen/Userlogin';
import Home from './screen/home/Home';
import Notfound from './screen/pages/404/Notfound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={Userlogin} />
          <Route exact path='/signup' component={Register} />
          <Route exact path='/forget_password' component={Forgetpassword} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin_login' component={Login} />
          <Route component={Notfound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
