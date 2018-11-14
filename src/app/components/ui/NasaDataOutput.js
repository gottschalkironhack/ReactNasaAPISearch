import React, {Component} from 'react'
import PropTypes from 'prop-types'
var dateFormat = require('dateformat')

class NasaDataOutput extends Component{
  
  render(){
    let filteredNasaData = this.props.nasaData === null ? null : this.props.nasaData.filter(function(dataItem){
      return dataItem.links != undefined && dataItem.links[0].href.substring(dataItem.links[0].href.length - 3, dataItem.links[0].href.length) === 'jpg'
    })

    if(filteredNasaData === null){
      return null
    }
    
    else if(filteredNasaData.length > 0){
      return(
        <div className='col-8 m-auto'>
          <div className='card-columns'>
            { filteredNasaData.map( (dataItem) => ( 
              <div className='card' key={ dataItem.data[0].nasa_id }>         
                <img className='card-img-top' src={ dataItem.links[0].href }/> 
                <div className='card-body'>
                  <h5 className='card-title text-dark'>Picture taken on { dateFormat(dataItem.data[0].date_created, 'dddd, mmmm dS, yyyy, h:MM:ss TT') }</h5>
                  <p className='card-text text-dark'>{ dataItem.data[0].description }</p> 
                </div>
              </div> 
              )) 
            }     
          </div>
        </div>
      )
    }else if(filteredNasaData.length === 0){
      return (
        <div className='text-white'>
          There were no images found for your search term
        </div>
      )
    }
  }
}

NasaDataOutput.propTypes = {
  nasaData: PropTypes.array
}

export default NasaDataOutput
