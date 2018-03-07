import React, { Component } from 'react'
import axios from 'axios'
import { 
  Form, Input, Button, message
} from 'antd'
import _ from 'lodash'
import baseUrl from '../../common/util'

const FormItem = Form.Item

class RegistrationForm extends Component {
  state = {
    confirmDirty: false
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form

    if (value && value.length < 8) {
      callback('Password must be at least 8 characters.')
    } else if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    } else {
      callback()
    }
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({ 
      confirmDirty: this.state.confirmDirty || !!value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        return axios.post(baseUrl + '/regi', _.omit(values), ['confirm'])
          .then(res => {
            this.props.handleCancel()
            message.success('Registration succeed!')
          })
          .catch(err => {
            if (err.response.status === 400) {
              message.error('User has been registration!')
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

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }

    return (
      <Form onSubmit={this.handleSubmit} className="registration-form">
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>Username</span>
          )}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary"
              htmlType="submit" 
              className="registration-form-button">
            Register
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(RegistrationForm)
