import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MovieList } from '../components/list/MovieList'

export default class Home extends Component {
  render() {
    return (
      <div> 
        <Link to="/Movie">        
            </Link>
        
          <MovieList/>
      </div>
    )
  }
}
