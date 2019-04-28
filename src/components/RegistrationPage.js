import React, { Component } from 'react';
import './RegistrationPage.css'
import Api from '../helpers/api'

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    
  }
  async signupClicked() {
    console.log(this.state.data)
    const result = await Api().post('/v1/register/client_id=16&client_secret=2940817743989db01f17da185025b0d0ade26778652',this.state.data)
    console.log(result)
    await this.props.history.push('/login')
  }
  async dataChange(field,value){
    await this.setState({data: { ...this.state.data, [field]: value}})
  }
  render() {
    return(
      <div className= "registration-container">
        <div id="form">
          <div className="form-header">Register/Signup</div>
          <input type="text" placeholder="Your Name" onChange={(e)=>this.dataChange('name',e.target.value)}></input>
          <input type="text" placeholder="Your email" onChange={(e)=>this.dataChange('email',e.target.value)}></input>
          <input type="text" placeholder="Your Phone" onChange={(e)=>this.dataChange('phone',e.target.value)}></input>
          <input type="password" placeholder="Your Password" onChange={(e)=>this.dataChange('password',e.target.value)}></input>
          <div className="submit-button">
            <input type="submit" value="SIGNUP" onClick={()=>this.signupClicked()}/>
          </div>
        </div>
      </div>
    )
  }
}