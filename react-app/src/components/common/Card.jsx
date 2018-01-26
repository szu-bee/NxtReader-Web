import React, { Component } from 'react'
import { Card, Icon, Tooltip, Popover, Button } from 'antd'

const { Meta } = Card

class CardBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarred: false,
      isRead: false
    }
  }

  toggleStar = () => {
    this.setState({
      isStarred: !this.state.isStarred
    })
  }

  toggleRead = () => {
    this.setState({
      isRead: !this.state.isRead
    })
  }
  
  render() {
    const isStarred = this.state.isStarred
    const isRead = this.state.isRead

    let icon = !isStarred ? 
      <Tooltip placement="bottomLeft" 
        title="Star article">
        <Icon type="star-o" onClick={this.toggleStar} size="200" />
      </Tooltip> :
      <Tooltip placement="bottomLeft" 
        title="UnStar article">
        <Icon type="star" onClick={this.toggleStar} />
      </Tooltip>
      
    return (
      <Card id="card"
        cover={<img alt="fst-pic" src={this.props.src} />}
        actions={[
          <div>{ icon }</div>, 
          <Tooltip placement="bottomLeft"
            title="Open in new tab">
            <a target="_blank" href={this.props.href}>
              <Icon type="plus-square-o" />
            </a>
          </Tooltip>,
          <Popover trigger="click"
            content={
              <Button size="large" type="dash" onClick={this.toggleRead}>
                Mark as { !isRead ? 'read' : 'unread' }
              </Button>
            }
          >
            <Icon type="ellipsis" />
          </Popover>
        ]}
        style={ !this.state.isRead ? { background: '#fff' } 
                                   : { background: '#f1f5fa' } }
      >
        <Meta title={this.props.title}
          description={this.props.description}
        />
      </Card>
    )
  }
}

export default CardBlock
