import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active"> 首页 </NavItem>{' '}
          <NavItem className="left"> 下载App </NavItem>{' '}
          <NavItem className="right"> 登录 </NavItem>{' '}
          <NavItem className="right">
            <i className="iconfont"> &#xe636; </i>{' '}
          </NavItem>{' '}
          <SearchWrapper>
            <NavSearch />
            <i className="iconfont"> &#xe623; </i>{' '}
          </SearchWrapper>{' '}
        </Nav>{' '}
        <Addition>
          <Button className="write">
            <i className="iconfont"> &#xe61c; </i>
            写文章{' '}
          </Button>{' '}
          <Button className="sign"> 注册 </Button>{' '}
        </Addition>{' '}
      </HeaderWrapper>
    )
  }
}

export default Header
