import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import Home from './pages/Home'
import Multi from './pages/Multi'
import TwoCountry from './pages/TwoCountry'

const App = () => {
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography variant='h4' align='center'>PRP Assignment 5</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/multi' exact><Multi /></Route>
        <Route path='/twocountry' exact><TwoCountry /></Route>
      </Switch>
    </>
  )
}

export default App