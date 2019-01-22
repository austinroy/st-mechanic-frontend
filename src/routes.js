import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'

const Routes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </App>
)

export default Routes
