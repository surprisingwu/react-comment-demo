import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfoWrapper,
  SearchInfoTitle,
  SearchInfoChange,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoContent,
  SearchInfoHeader
} from './style'
import { connect } from 'react-redux'
import { creators } from './store'

const getFocusArea = (show, list = []) => {
  if (show) {
    return (
      <SearchInfoWrapper>
        <SearchInfoHeader>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoChange>换一批</SearchInfoChange>
        </SearchInfoHeader>
        <SearchInfoList>
          {list.map((item, i) => (
            <SearchInfoItem key={i}>
              <SearchInfoContent>{item}</SearchInfoContent>
            </SearchInfoItem>
          ))}
        </SearchInfoList>
      </SearchInfoWrapper>
    )
  } else {
    return null
  }
}

const Header = props => {
  const { focused, handleSearchFocus, handleSearchBlur, searchInfo } = props
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
          <CSSTransition in={focused} timeout={500} classNames="slide">
            <NavSearch onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
          </CSSTransition>
          <i className="iconfont">&#xe623;</i>
          {getFocusArea(focused, searchInfo)}
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
const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchInfo: state.getIn(['header', 'searchInfo'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocus() {
      dispatch(creators.getSearchInfo())
      dispatch(creators.setSearchFocus())
    },
    handleSearchBlur() {
      dispatch(creators.setSearchBlur())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
