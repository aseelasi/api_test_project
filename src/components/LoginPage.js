import React, { Component } from 'react';
import './LoginPage.css'
import Api from '../helpers/api'

const clientData = {
  client_id : '16',
  client_secret: '2940817743989db01f17da185025b0d0ade26778652',
  grant_type: 'password'
}
export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }
  componentDidMount() {

  }
  async loginClicked() {
    await this.setState({data: {...this.state.data,clientData}})
    console.log(this.state.data)
    const result = await Api().post('/oauth/token',this.state.data)
    console.log(result)
    await this.props.history.push('/')
  }
  async dataChange(field,value){
    await this.setState({data: { ...this.state.data, [field]: value}})
  }
  render() {
    return(
      <div className= "login-container">
        <div id="form">
          <div className="form-header">LOGIN</div>
          <input type="text" placeholder="Your Name" onChange={(e)=>this.dataChange('name',e.target.value)}></input>
          <input type="password" placeholder="Your Password" onChange={(e)=>this.dataChange('password',e.target.value)}></input>
          <div className="submit-button">
            <input type="submit" value="LOGIN" onClick={()=>this.loginClicked()}/>
          </div>
        </div>
      </div>
    )
  }
}