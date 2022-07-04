import React from 'react'
import axios from 'axios'
import CowList from './CowList.jsx'
import Form from './Form.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows: [],
      currDef: ''
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.postHandler = this.postHandler.bind(this)
    this.deleter = this.deleter.bind(this)
    this.updateHandler = this.updateHandler.bind(this)
  }

componentDidMount() {
  axios.get('/api/cows')
    .then(res => this.setState({cows: res.data}))
    .catch(err => alert(err))
}

postHandler(obj) {
  axios.post('/api/cows', obj)
    .then(res => this.setState({cows: res.data}))
    .catch(err => alert(err))
}

clickHandler(id) {
  this.setState({currDef:id})
}

updateHandler(id, obj) {
  if(!obj.name || !obj.description) {
    return
  }
  axios.put('api/cows/' + id, obj)
    .then(res => this.setState({cows: res.data}))
    .catch(err => console.log(err))
}

deleter(id) {
  axios.delete('api/cows/' + id)
    .then(res => this.setState({cows: res.data}))
    .catch(err => console.log(err))
  if(id === this.state.currDef) {
    this.setState({currDef:''})
  }
}

  render() {
    return (
      <div>
        <Form postHandler={this.postHandler}/>
        <CowList cowlist={this.state} clicker={this.clickHandler} deleter={this.deleter} updater={this.updateHandler}/>
      </div>
    )
  }
}


export default App