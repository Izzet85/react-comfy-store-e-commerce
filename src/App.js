import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import Nav from './components/Navbar'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>

        <Route exact path='/products'>
          <Products></Products>
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />}>
          <Products />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/*'>
          <Error />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App
