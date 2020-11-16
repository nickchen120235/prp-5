import React, { useState } from 'react'
import { Switch, Route, Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import Home from './pages/Home'
import Multi from './pages/Multi'
import TwoCountry from './pages/TwoCountry'

import useStyles from './utils/styles'
import { createMenuHandler } from './utils/utils'

const App = () => {
  const style = useStyles()

  /** states */
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')

  /** handlers */


  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={() => setMenuOpen(true)}><Menu /></IconButton>
          <Typography className={style.title} variant='h4' align='center'>PRP Assignment 5: {currentPage}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/multi' exact><Multi /></Route>
        <Route path='/twocountry' exact><TwoCountry /></Route>
      </Switch>
      <Drawer anchor='left' open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          <ListItem button onClick={createMenuHandler('Home', setCurrentPage, setMenuOpen)} selected={currentPage === 'Home'} component={RouterLink} to={'/'}>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button onClick={createMenuHandler('Multi', setCurrentPage, setMenuOpen)} selected={currentPage === 'Multi'} component={RouterLink} to='/multi'>
            <ListItemText primary='Multi' />
          </ListItem>
          <ListItem button onClick={createMenuHandler('Two Country', setCurrentPage, setMenuOpen)} selected={currentPage === 'Two Country'} component={RouterLink} to='/twocountry'>
            <ListItemText primary='Two Country' />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default App