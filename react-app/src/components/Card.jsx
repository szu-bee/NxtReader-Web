import React, { Component } from 'react'
import { Card, Icon, Tooltip } from 'antd'

const { Meta } = Card

function newTab() {
  // return 
}

function CardBlock(props) {
  return (
    <Card id="card"
      cover={<img alt="fst-pic" src={props.src} />}
      actions={[<Tooltip placement="bottomLeft" 
                  title="Star article">
                  <Icon type="star-o" />
                </Tooltip>, 
                <Tooltip placement="bottomLeft"
                  title="Open in new tab">
                  <Icon type="plus-square-o"
                    onClick={ newTab } />
                </Tooltip>,
                <Icon type="ellipsis"
                />
              ]}>
      <Meta
        title={props.title}
        description={props.description}
      />
    </Card>
  )
}

export default CardBlock