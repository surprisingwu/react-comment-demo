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
      list: MockData,
      activeIndex: 0
    };
  }
  componentDidMount() {
    const { list } = this.state
    const len = list.length
    const lis = this.els.children
    const callBack = () => {
      let { activeIndex } = this.state;
      lis[activeIndex].classList.remove('active')
      if (activeIndex >= len - 1) {
        activeIndex = 0
      } else {
        activeIndex ++
      }
      lis[activeIndex].classList.add('active')
      this.setState({
        activeIndex
      });
    };
    this.intervalTimer = setInterval(callBack, 5000);
  }
  render() {
    const { list, activeIndex } = this.state;
    return (
      <SwipeWrapper ref={(wrapper) => {this.wrapper = wrapper}}>
        <SwipeContainer ref={(els) => {this.els = els}}>
        {list.map((item, i) => (
          <SwipeItem key={i} index={i} className={i === activeIndex?'active':''}>
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
