import * as React from 'react'
import { Component } from 'react'

class SearchInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedLanguage: 'All',
      inputValue: 'Search Nasa Database',
      inputError: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.state.inputValue === '' || this.state.inputValue === 'Search Nasa Database' || this.state.inputValue === undefined) {
      this.setState({ inputError: 'Please write a query before submitting' })
      return
    }
    if(this.state.inputError != '') this.setState({ inputError: '' })
    this.props.onGetImages(this.state.inputValue)
  }

  onChangeHandler(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
    <div className='mb-4'>
      <form className='text-center' onSubmit={ this.handleSubmit }>
        <div className='form-group text-center' >
          <input name='inputValue' className='col-8 text-center m-auto mb-4 mt-4 form-control form-control-lg rounded' aria-describedby='Search Nasa Database' placeholder='Search Nasa Database' onChange = {this.onChangeHandler} value={this.state.inputValue}></input>
        </div>
        {this.state.inputError ? (<div className='mb-4'>{ this.state.inputError }</div>) : null}
        <button className='btn btn-primary' type='submit'>SUBMIT</button>
      </form>
    </div>
    )
  }
}
export default SearchInput