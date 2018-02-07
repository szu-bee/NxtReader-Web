import React, { Component } from 'react'
import {
  Redirect
} from 'react-router-dom'
import axios from 'axios'
import { 
  Form, Icon, Input, Button, Checkbox, message
} from 'antd'
import baseUrl from '../../common/util'

const FormItem = Form.Item

class NormalLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginSucc: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        return axios.post(baseUrl + '/login', values)
          .then(res => {
            this.setState({
              loginSucc: true
            })
          })
          .catch(err => {
            if (err.response.status === 400) {
              message.error('Email or password wrong!')
            }
            if (err.response.status === 500) {
              message.error('Server failed.')
            }
          })
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form
    const { loginSucc } = this.state

    if (loginSucc) {
      return <Redirect to='/main' />
    }
    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          { 
            getFieldDecorator('email', {
              rules: [{ 
                type: 'email', message: 'The input is not valid E-mail!'
              }, { 
                required: true, message: 'Please input your E-mail!' 
              }]
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [{ 
                required: true, message: 'Please input your Password!' 
              }]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
          )}
          {/* <a className="login-form-forgot" href="">Forgot password</a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NormalLoginForm)
