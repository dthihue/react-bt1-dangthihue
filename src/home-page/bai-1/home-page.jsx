import React, { Component } from 'react'
import Navbar from './navbar'
import Header from './header'
import Container from './container'
import Footer from './footer'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    )
  }
}
