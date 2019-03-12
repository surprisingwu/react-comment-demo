import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';
import { connect } from 'react-redux';
import { creators } from './store';

const Header = (props) => { 
  const {focused, handleSearchFocus, handleSearchBlur } = props
  return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper className={focused ? 'focused' : ''}>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              />
            </CSSTransition>
            <i className="iconfont">&#xe623;</i>
          </SearchWrapper>
         
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont">&#xe61c;</i>
            写文章
          </Button>
          <Button className="sign">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => { 
  return {
    handleSearchFocus() {
      dispatch(creators.setSearchFocus())
    },
    handleSearchBlur() { 
      dispatch(creators.setSearchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
