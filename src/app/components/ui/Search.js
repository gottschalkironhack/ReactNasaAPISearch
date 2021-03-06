import *  as NasaAPI from '../../api/nasaAPI'
import * as React from 'react'
import { Component } from 'react'
import SearchInput from './SearchInput'
import NasaDataOutput from './NasaDataOutput'

class Search extends Component{
  constructor(props){
    super(props)
    this.state = { 
      nasaData: null
    }
    this.getImagesFromNasa = this.getImagesFromNasa.bind(this)
  }

  getImagesFromNasa(query) {
    NasaAPI.getNasaImages(query)
      .then((data) => {
        this.setState({nasaData: data}) 
    }) 
  }

  render(){
    return(
    <div>
      <SearchInput
        onGetImages = { this.getImagesFromNasa }
      />
      <NasaDataOutput
        nasaData = { this.state.nasaData }
      />
    </div>
  )}
}
export default Search