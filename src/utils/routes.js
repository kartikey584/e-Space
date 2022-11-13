import React , {useEffect} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Overview from '../pages/overview';
import Login from "../Components/general/login"
import Signup from "../Components/general/signup"
const Routes = () => {
  const path = window.performance;
  useEffect(() =>{
    if (path) {
      if (path.navigation.type == 1) {
        window.location.pathname = '/home' 
      }
    }
  },[window.location.pathname])

  return (
    <Switch>
        <Redirect from = '/' exact to = '/home' />
        <Route path = "/home"  component={Overview} />
        <Route path = "/games"  component={Overview} />
        <Route path = "/community"  component={Overview} />
        {/* <Route path = "/login"  component={Overview} />
        <Route path = "/signup"  component={Overview} /> */}

    </Switch>
  )
}

export default Routes