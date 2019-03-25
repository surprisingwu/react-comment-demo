import React, { Component } from 'react';
import {
  SwipeWrapper,
  SwipeItem,
  SwipeContent,
  SwipeLeftArrow,
  SwipeRightArrow,
  SwipeDots
} from './style'

export default class Swipe extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        { src: '//upload.jianshu.io/admin_banners/web_images/4620/8ce28ed4656eaa9d606d92c60ba6a04e419cf39b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' },
        { src: '//upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' },
        {src: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}
      ],
      isMouseOn: false
    }
    this.handlerMouseEnter = this.handlerMouseEnter.bind(this)
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this)
  }
  handlerMouseEnter() { 
    this.setState({
      isMouseOn: true
    })
  }
  handlerMouseLeave() { 
    this.setState({
      isMouseOn: false
    })
  }
  render() {
    const {list} = this.state
    return (
      <SwipeWrapper onMouseEnter={this.handlerMouseEnter} onMouseLeave={this.handlerMouseLeave}>
        {list.map((item, i) =>  
          <SwipeItem key={i}>
            <SwipeContent>
              <img className='img' alt='' src={item.src}/>
            </SwipeContent>
          </SwipeItem>
        )}
        <SwipeLeftArrow />
        <SwipeRightArrow />
        <SwipeDots>
        </SwipeDots>
      </SwipeWrapper>
    )
  }


}
