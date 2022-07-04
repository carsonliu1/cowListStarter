import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    const key = e.target.name
    const value = e.target.value
    const copy = {...this.state}
    copy[key] = value
    this.setState(copy)
  }

  submitHandler(e) {
    e.preventDefault()
    this.props.postHandler(this.state)
    this.setState({name:'', description:''})
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <input type='text' name='name' value={this.state.name} onChange={this.changeHandler} placeholder='Enter a cow name'></input>
        <input type='text' name='description' value={this.state.description} onChange={this.changeHandler} placeholder='Enter a cow description'></input>
        <button type='submit'> Submit </button>
      </form>
    )
  }
}


export default Form