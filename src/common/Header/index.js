import React, { Component } from 'react'
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

class Header extends Component {
  getSearchArea() {
    const {
      focused,
      searchInfo,
      page,
      mouseIn = false,
      handleEnter,
      handleLeave,
      handleChangePage
    } = this.props
    const newList = searchInfo.toJS()
    const pageList = []
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      const item = newList[i]
      if (item) {
        pageList.push(newList[i])
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfoWrapper
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <SearchInfoHeader>
            <SearchInfoTitle>热门搜索</SearchInfoTitle>
            <SearchInfoChange
              onClick={() => {
                handleChangePage(this.spinIcon)
              }}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe689;
              </i>
              换一批
            </SearchInfoChange>
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
  render() {
    const {
      focused,
      searchInfo,
      handleSearchFocus,
      handleSearchBlur
    } = this.props
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
              <NavSearch
                onFocus={() => {
                  handleSearchFocus(searchInfo)
                }}
                onBlur={handleSearchBlur}
              />
            </CSSTransition>
            <i className="iconfont zoom">&#xe623;</i>
            {this.getSearchArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont">&#xe61c;</i> 写文章
          </Button>
          <Button className="sign">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
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
    handleSearchFocus(list) {
      (list.size === 0) && dispatch(creators.getSearchInfo());
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
    handleChangePage(spin) {
      let originalDeg = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originalDeg) {
        originalDeg = parseInt(originalDeg, 10)
      } else {
        originalDeg = 0
      }
      spin.style.transform = `rotate(${360 + originalDeg}deg)`
      dispatch(creators.setSearchPage())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
