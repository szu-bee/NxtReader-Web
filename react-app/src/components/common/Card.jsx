import React, { Component } from 'react'
import { Card, Icon, Tooltip, Popover, Button } from 'antd'

import baseUrl from '../../common/util'
import axios from 'axios'

const { Meta } = Card

class CardBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarred: this.props.starred,
      isRead: this.props.read
    }
  }

  toggleStar = () => {
    const basePath = baseUrl + '/feed/' + (this.state.isStarred ? 'unstar' : 'star')
    axios.get(basePath + '?articleID=' + this.props.articleID)
      .then(res => {
        if (res.data === 'OK') {
          this.setState({
            isStarred: !this.state.isStarred
          })
        }
      })
  }

  toggleRead = () => {
    const basePath = baseUrl + '/feed/' + (this.state.isRead ? 'unread' : 'read')
    axios.get(basePath + '?articleID=' + this.props.articleID)
      .then(res => {
        if (res.data === 'OK') {
          this.setState({
            isRead: !this.state.isRead
          })
        }
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAllRead) {
      this.setState({
        isRead: true
      })
      this.forceUpdate()
    }
  }

  render() {
    const isStarred = this.state.isStarred
    let isRead = this.state.isRead
    
    let icon = !isStarred ?
      <Tooltip placement="bottomLeft"
          title="Star article">
        <Icon type="star-o" onClick={ this.toggleStar } size="200" />
      </Tooltip> :
      <Tooltip placement="bottomLeft"
          title="UnStar article">
        <Icon type="star" onClick={ this.toggleStar } />
      </Tooltip>

    if (this.props.picUrl !== null) {
      return (
        <Card id="card"
          cover={<img alt="fst-pic" src={ this.props.picUrl } />}
          actions={[
            <div>{ icon }</div>,
            <Tooltip placement="bottomLeft"
                title="Open in new tab">
              <a target="_blank" href={ this.props.homeUrl }>
                <Icon type="plus-square-o" />
              </a>
            </Tooltip>,
            <Popover trigger="click"
              content={
                <Button size="large" type="dash" onClick={ this.toggleRead }>
                  Mark as { isRead ? 'unread' : 'read' }
                </Button>
              }>
              <Icon type="ellipsis" />
            </Popover>
          ]}
          style={
            isRead ? { background: '#f1f5fa' } : { background: '#fff' }
          }
        >
          <Meta title={ this.props.title + '...' }
            description={ this.props.content.substr(0, 80) + '...' }
          />
        </Card>
      )
    }

    return (
      <Card id="card"
        actions={[
          <div>{ icon }</div>, 
          <Tooltip placement="bottomLeft"
              title="Open in new tab">
            <a target="_blank" href={ this.props.homeUrl }>
              <Icon type="plus-square-o" />
            </a>
          </Tooltip>,
          <Popover trigger="click"
            content={
              <Button size="large" type="dash" onClick={ this.toggleRead }>
                Mark as { isRead ? 'unread' : 'read' }
              </Button>
            }>
            <Icon type="ellipsis" />
          </Popover>
        ]}
        style={
          isRead ? { background: '#f1f5fa' } : { background: '#fff' }
        }
      >
        <Meta title={ this.props.title + '...' }
          description={ this.props.content.substr(0, 180) + '...' }
        />
      </Card>
    )
  }
}

export default CardBlock
