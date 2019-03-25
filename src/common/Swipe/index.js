import React, { Component } from "react";
import { SwipeWrapper, SwipeItem, SwipeContent } from "./style";

// 一个移出动画
export default class Swipe extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          src:
            "//upload.jianshu.io/admin_banners/web_images/4620/8ce28ed4656eaa9d606d92c60ba6a04e419cf39b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        },
        {
          src:
            "//upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        },
        {
          src:
            "//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        }
      ],
      activeIndex: 2
    };
  }
  componentDidMount() {
    const children = this.els.children;
    const len = children.length;
    let lastIndex
    const callBack = () => {
      let { activeIndex } = this.state;
      lastIndex = activeIndex
      const currentEl = children[activeIndex];
      currentEl.style.zIndex = '2'
      currentEl.style.transform = `translate3d(-100%, 0, 0)`;
      if (activeIndex >= len-1) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }
      if(lastIndex !== activeIndex ) {
        const lastEl = children[activeIndex]
        lastEl.style.zIndex = '-1'
        lastEl.style.transform = `translate3d(0, 0, 0)`
      }
     
      this.setState({
        activeIndex
      });
    };
    this.intervalTimer = setInterval(callBack, 5000);
  }
  render() {
    const { list } = this.state;
    return (
      <SwipeWrapper
        ref={els => {
          this.els = els;
        }}
      >
        {" "}
        {list.map((item, i) => (
          <SwipeItem key={i} index={i}>
            <SwipeContent>
              <img className="img" alt="" src={item.src} />{" "}
            </SwipeContent>{" "}
          </SwipeItem>
        ))}{" "}
      </SwipeWrapper>
    );
  }
}
