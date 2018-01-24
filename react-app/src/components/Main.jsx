import React, { Component } from 'react'
import { Layout, Menu, Icon, Input, Tooltip, Modal } from 'antd'
import PropTypes from 'prop-types'
import Card from './Card'

const { Header, Sider } = Layout
const { SubMenu } = Menu
const Search = Input.Search
const confirm = Modal.confirm

const cards = [
  {
    id: 1,
    title: 'Title1',
    description: 'This is the description',
    src: 'http://www.photocat.co.uk/images/galleries/images/184-8430-R.jpg',
    href: 'http://www.photocat.co.uk/images/galleries/images/184-8430-R.jpg'
  },
  {
    id: 2,
    title: 'Title2',
    description: 'This is the description',
    src: 'http://dompict.com/wp-content/uploads/2016/08/Blue-cat-3-Photo-2.jpg',
    href: 'http://dompict.com/wp-content/uploads/2016/08/Blue-cat-3-Photo-2.jpg'
  },
  {
    id: 3,
    title: 'Title3',
    description: 'This is the description',
    src: 'http://www.wallpaperstop.com/wallpapers/animal-wallpapers/cat-wallpapers/cat-photo-1600x1200-0043.jpg',
    href: 'http://www.wallpaperstop.com/wallpapers/animal-wallpapers/cat-wallpapers/cat-photo-1600x1200-0043.jpg'
  },
  {
    id: 4,
    title: 'Title4',
    description: 'This is the description',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    id: 5,
    title: 'Title5',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  },
  {
    id: 6,
    title: 'Title6',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  },
  {
    id: 7,
    title: 'Title1',
    description: 'This is the description',
    src: 'http://www.photocat.co.uk/images/galleries/images/184-8430-R.jpg',
    href: 'http://www.photocat.co.uk/images/galleries/images/184-8430-R.jpg'
  },
  {
    id: 8,
    title: 'Title2',
    description: 'This is the description',
    src: 'http://dompict.com/wp-content/uploads/2016/08/Blue-cat-3-Photo-2.jpg',
    href: 'http://dompict.com/wp-content/uploads/2016/08/Blue-cat-3-Photo-2.jpg'
  },
  {
    id: 9,
    title: 'Title3',
    description: 'This is the description',
    src: 'http://www.wallpaperstop.com/wallpapers/animal-wallpapers/cat-wallpapers/cat-photo-1600x1200-0043.jpg',
    href: 'http://www.wallpaperstop.com/wallpapers/animal-wallpapers/cat-wallpapers/cat-photo-1600x1200-0043.jpg'
  },
  {
    id: 10,
    title: 'Title4',
    description: 'This is the description',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    id: 11,
    title: 'Title5',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  },
  {
    id: 12,
    title: 'Title6',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  }
]

function Content(props) {
  const cd = props.cards.map(card =>
    <Card key={card.id} 
      title={card.title}
      description={card.description}
      src={card.src}
      href={card.href}
    />
  )

  return (
    <div className="content">
      {cd}
    </div>
  )
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      showFeeds: false
    })
  }

  toggleSearch = () => {
    this.setState({
      collapsed: false
    })
  }

  showConfirm = () => {
    confirm({
      title: 'Do you Want to mark all as read?',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  render() {
    return (
      <Layout id="Main">
        <Sider id="sider"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}>
          <Search className="search"
            placeholder="Search | subscribe"
            onClick={this.toggleSearch}
            onSearch={value => console.log(value)}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="file-text" />
              <span>All articles</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="star" />
              <span>Stars</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Tooltip placement="topLeft" 
                title="Only recommend what you concern">
                <Icon type="smile" />
                <span>Recommendation</span>
              </Tooltip>
            </Menu.Item>
            <SubMenu key="sub1" 
              title={
                    <div>
                      <Icon type="folder-add" />
                      <span>Subscriptions</span>
                    </div>
              }
            >
              <Menu.Item key="s1">feed1</Menu.Item>
              <Menu.Item key="s2">feed2</Menu.Item>
              <Menu.Item key="s3">feed3</Menu.Item>
              <Menu.Item key="s4">feed4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout id="right-container">
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
            />
            <Icon type="reload" className="trigger" />
            <span className="now-list">All articles</span>
            <span className="toolbar-right">
              <span className="trigger" onClick={this.showConfirm}>
                <Icon type="down-circle-o" />
                <span className="mark">Mark all as read</span>
              </span>
              <span className="trigger">100 Unread</span>
              <span>
                <Tooltip placement="bottomRight" title={<span>Notifications</span>}>
                  <Icon type="notification" className="trigger" />
                </Tooltip>
              </span>
              <span>
                <Tooltip placement="bottomRight" title={<span>Preferences Menu</span>}>
                  <Icon type="setting" className="trigger" />
                </Tooltip>
              </span>
            </span>
          </Header>
          <Content cards={cards} />
        </Layout>
      </Layout>
    )
  }
}

Main.propTypes = {
  collapsed: PropTypes.bool
}

export default Main