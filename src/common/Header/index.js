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

const SearchInfoToast = props => {
  const {
    focused = false,
    pageList = [],
    mouseIn = false,
    handleEnter,
    handleLeave,
    handleChangePage
  } = props
  if (focused || mouseIn) {
    return (
      <SearchInfoWrapper
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <SearchInfoHeader>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoChange onClick={handleChangePage}>换一批</SearchInfoChange>
        </SearchInfoHeader>
        <SearchInfoList>
          {pageList.map((item, i) => (
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
  const {
    focused,
    handleSearchFocus,
    handleSearchBlur,
    searchInfo,
    page,
    mouseIn,
    handleEnter,
    handleLeave,
    handleChangePage
  } = props
  const newList = searchInfo.toJS()
  const pageList = []
  for (let i = (page - 1) * 10; i < page * 10; i++) {
    const item = newList[i]
    if (item) {
      pageList.push(newList[i])
    } 
  }
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
          <SearchInfoToast
            focused={focused}
            pageList={pageList}
            mouseIn={mouseIn}
            handleEnter={handleEnter}
            handleLeave={handleLeave}
            handleChangePage={handleChangePage}
          />
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
    searchInfo: state.getIn(['header', 'searchInfo']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn'])
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
    },
    handleEnter() {
      dispatch(creators.setMouseEnter())
    },
    handleLeave() {
      dispatch(creators.setMouseLeave())
    },
    handleChangePage() {
      dispatch(creators.setSearchPage())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
