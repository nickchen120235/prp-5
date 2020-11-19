import React, { useState } from 'react'
import { Switch, Route, Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import Distribution from './pages/Distribution'
import MultiCountry from './pages/MultiCountry'
import MultiSeries from './pages/MultiSeries'

import useStyles from './utils/styles'

const App = () => {
  const style = useStyles()

  /** states */
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')

  /** handlers */
  const handleTitleChange = (title: string) => setCurrentPage(title)

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
        <Route path='/' exact><Distribution setTitle={handleTitleChange} /></Route>
        <Route path='/distribution' exact><Distribution setTitle={handleTitleChange} /></Route>
        <Route path='/multicountry' exact><MultiCountry setTitle={handleTitleChange} /></Route>
        <Route path='/multiseries' exact><MultiSeries setTitle={handleTitleChange} /></Route>
      </Switch>
      <Drawer anchor='left' open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          <ListItem button onClick={() => setMenuOpen(false)} selected={currentPage === 'Data Distribution'} component={RouterLink} to={'/distribution'}>
            <ListItemText primary='Data Distribution' />
          </ListItem>
          <ListItem button onClick={() => setMenuOpen(false)} selected={currentPage === 'Multiple Countries'} component={RouterLink} to='/multicountry'>
            <ListItemText primary='Multiple Countries' />
          </ListItem>
          <ListItem button onClick={() => setMenuOpen(false)} selected={currentPage === 'Multiple Series'} component={RouterLink} to='/multiseries'>
            <ListItemText primary='Multiple Series' />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default App