import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import NotFound from './pages/404/NotFound'
import LoginForm from './components/Forms/LoginForm/LoginForm'
import SignUpForm from './components/Forms/SignUp/SignUpForm'
import GarageDashboard from './pages/GarageDashboard/GarageDashboard'
import GarageLogin from './pages/Auth/GarageLogin'
import GarageSignUp from './pages/Auth/GarageSignUp'
import SignUp from './pages/Auth/SignUp'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/garage-login" component={GarageLogin} />
      <Route exact path="/garage-signup" component={GarageSignUp} />
      <Route exact path="/garagedashboard" component={GarageDashboard} />
      <Route component={NotFound} />
    </Switch>
  </App>
)

export default Routes
