import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import NotFound from './pages/404/NotFound'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </App>
)

export default Routes
