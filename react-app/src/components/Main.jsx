import React, { Component } from 'react'
import axios from 'axios'
import { 
  Layout, Menu, Icon, Input, Tooltip, Modal, message
} from 'antd'
import Card from './common/Card'
import baseUrl from '../common/util'

const { Header, Sider } = Layout
const { SubMenu } = Menu
const Search = Input.Search
const confirm = Modal.confirm

const folders = [
  {
    id: 'f1',
    iconType: 'file-text',
    name: 'All articles'
  },
  {
    id: 'f2',
    iconType: 'star',
    name: 'Stars'
  },
  {
    id: 'f3',
    iconType: 'smile',
    name: 'Recommendation'
  }
]

class Content extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAllRead) {
      this.forceUpdate()
    }
  }

  render() {
    const { isAllRead } = this.props

    return (
      <div className="content">
        {
          this.props.cards.map(card =>
            <Card key={ card.id }
              articleID={ card.id }
              title={ card.title.substr(0, 12) }
              content={ card.content }
              picUrl={ card.picUrl }
              homeUrl={ card.homeUrl }
              read={ card.read }
              starred={ card.starred }
              isAllRead={ isAllRead }
            />
          )
        }
      </div>
    )
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      visible: false,
      isAllRead: false,
      correntId: 0,
      feeds: [],
      cards: [],
      unreadNum: 0,
      nowFeedID: 'f1'
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  toggleSearch = () => {
    this.setState({
      collapsed: false
    })
  }

  postUrl = feedUrl => {
    console.log(feedUrl)
    return axios.post(baseUrl + '/feed/add', { feedUrl })
      .then(res => {
        if (res.data === 'Already Existed') {
          message.warn('Feed Already Existed!')
        } else {
          // Modal.success({
          //   'content': 'Added! Please refresh page.'
          // })
          window.location.reload()
        }
      })
      .catch(err => {
        if (err.response.status === 500) {
          message.error('Server error!')
        } else {
          message.error('Can not add this feed.')
        }
      })
  }

  showModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  ok = () => {
    return axios.post(baseUrl + '/feed/allread?feedID=' + this.state.nowFeedID)
      .then(res => {
        this.setState({
          isAllRead: true
        })
      })
  }

  cancel = () => {
    this.setState({
      isAllRead: false
    })
  }

  showConfirm() {
    let that = this

    confirm({
      title: 'Do you Want to mark all as read?',
      onOk: that.ok,
      onCancel: that.cancel
    })
  }

  toggleSelectDir = index => {
    this.setState({
      correntId: index
    })
  }

  componentDidMount() {
    if (this.state.nowFeedID === 'f1') {
      axios.get(baseUrl + '/feed/fetch')
        .then(res => {
          console.table(res.data)

          this.setState({
            nowFeedID: 'f1',
            feeds: res.data
          })

          axios.get(baseUrl + '/articles')
            .then(art => {
              console.table(art.data)

              this.setState({
                cards: art.data
              })

              axios.get(baseUrl + "/articles/unreadcnt")
                .then(cnt => {
                  this.setState({
                    unreadNum: cnt.data  
                  })
                })
              })
          })
    }
  }

  nowFeed = (item, key, keyPath) => {
    let id = item.key
    
    if (id === 'f1') {
      axios.get(baseUrl + '/articles')
        .then(res => {
          console.table(res.data)

          this.setState({
            nowFeedID: 'f1',
            cards: res.data
          })

          axios.get(baseUrl + "/articles/unreadcnt")
            .then(cnt => {
              this.setState({
                unreadNum: cnt.data
              })
            })
        })
    } else if (id === 'f2') {
      axios.get(baseUrl + '/article/stars')
        .then(res => {
          this.setState({
            nowFeedID: 'f2',
            cards: res.data,
            unreadNum: 0
          })
        })
    } else if (id === 'f3') {
      axios.get(baseUrl + '/article/rec')
        .then(res => {
          this.setState({
            nowFeedID: 'f3',
            cards: res.data
          })

          axios.get(baseUrl + "/articles/unreadcnt")
            .then(cnt => {
              this.setState({
                unreadNum: cnt.data
              })
            })
        })
    } else {
      axios.get(baseUrl + '/article/get?feedID=' + id)
        .then(res => {
          console.table(res.data)

          this.setState({
            nowFeedID: id,
            cards: res.data
          })

          axios.get(baseUrl + "/feed/unreadcnt?feedID=" + id)
            .then(cnt => {
              this.setState({
                nowFeedID: id,
                unreadNum: cnt.data
              })

              if (cnt.data === 0) {
                message.info('Everything read.')
              }
        })
      })
    }
  }

  render() {
    const feeds = this.state.feeds
    const cards = this.state.cards
    const correntId = this.state.correntId
    const unreadNum = this.state.unreadNum

    return (
      <Layout id="Main">
        <Sider id="sider"
            trigger={ null }
            collapsible
            collapsed={ this.state.collapsed }>
          <Search className="search"
            placeholder="Subscribe"
            onClick={ this.toggleSearch }
            onSearch={ value => this.postUrl(value) }
          />
          <Menu theme="dark" mode="inline" 
            defaultSelectedKeys={['1']}
            onClick={ this.nowFeed }
          >
            {
              folders.map((folder, index) =>
                <Menu.Item key={ folder.id }>
                  <Icon type={ folder.iconType } />
                  <span>{ folder.name }</span>
                </Menu.Item>
              )
            }
            <SubMenu key="sub1"
                title={
                  <div>
                    <Icon type="folder-add" />
                    <span>Subscriptions</span>
                  </div>
                }>
              {
                feeds.map(feed =>
                  <Menu.Item key={ feed.id }>
                    { feed.name }
                  </Menu.Item>
                )
              }
            </SubMenu>
          </Menu>
        </Sider>
        <Layout id="right-container">
          <Header className="top-bar">
            <Icon className="trigger"
              type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
              onClick={ this.toggleCollapsed }
            />
            <span>{ folders[correntId].name }</span>
            <span className="toolbar-right">
              <span className="trigger" onClick={ this.showConfirm.bind(this) }>
                <Icon type="down-circle-o" />
                <span className="mark">Mark all as read</span>
              </span>
              <span className="trigger">{ unreadNum } Unread</span>
              <span>
                <Tooltip placement="bottomRight" title="Notifications">
                  <Icon type="notification" className="trigger" />
                </Tooltip>
              </span>
              <span>
                <Tooltip placement="bottomRight" title="Preferences Menu">
                  <Icon type="setting" className="trigger" />
                </Tooltip>
              </span>
            </span>
          </Header>
          <Content cards={ cards } isAllRead={ this.state.isAllRead } />
        </Layout>
      </Layout>
    )
  }
}

export default Main
