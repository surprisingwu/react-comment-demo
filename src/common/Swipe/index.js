import React, { Component } from "react";
import { SwipeWrapper, SwipeItem, SwipeContent ,SwipeContainer} from "./style";
import { Array } from "core-js";
const MockData = [
  {
    src: "//upload.jianshu.io/admin_banners/web_images/4620/8ce28ed4656eaa9d606d92c60ba6a04e419cf39b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  },
  {
    src: "//upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  },
  {
    src: "//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }
]

// 一个移出动画
export default class Swipe extends Component {
  constructor() {
    super();
    this.state = {
      list: this.computedList(MockData),
      activeIndex: 0
    };
  }
  computedList(list = []) {
    list = Array.from(list)
    const endItem = list.slice(-1)
    const startItem = list.slice(0, 1)
    list.push(startItem[0])
    list.unshift(endItem[0])
    console.log(list);
    return list
  }
  componentDidMount() {
    const {width} = this.wrapper.getBoundingClientRect()
    const containerEl = this.els
    const children = containerEl.children;
    const len = children.length;
    for (let key = 0; key < len; key++) { 
      const _currentLi_ = children[key]
      _currentLi_.style.width = width + 'px'
    }
    containerEl.style.width = `${len*width}px`
    const callBack = () => {
      let { activeIndex } = this.state;
      if (activeIndex <len - 1) {
        activeIndex++
      } else {
        activeIndex = 0
      }
      console.log(activeIndex)
      containerEl.style.left = `-${activeIndex * width}px`;
      this.setState({
        activeIndex
      });
    };
    this.intervalTimer = setInterval(callBack, 2000);
  }
  render() {
    const { list } = this.state;
    return (
      <SwipeWrapper ref={(wrapper) => {this.wrapper = wrapper}}>
        <SwipeContainer ref={(els) => {this.els = els}}>
        {list.map((item, i) => (
          <SwipeItem key={i} index={i}>
            <SwipeContent>
              <img className="img" alt="" src={item.src} />
            </SwipeContent>
          </SwipeItem>
        ))}
        </SwipeContainer>
      </SwipeWrapper>
    );
  }
}
