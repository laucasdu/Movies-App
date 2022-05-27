import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MovieListF } from '../components/list/MovieListF'

export default class Home extends Component {
  render() {
    return (
      <div> 
        <Link to="/Movie">        
            </Link>
        
          <MovieListF/>
      </div>
    )
  }
}
