import React, { Component } from 'react';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import Swipe from '../../common/Swipe';
import { connect } from 'react-redux';
import { changeScrollState } from './store/actionCreators';
import {scrollAnimation } from '../../utils/util';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BannerImg,
  ScrollToTop
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <BannerImg>
            <Swipe/>
          </BannerImg>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScrollTop?<ScrollToTop  onClick={this.ScrollToTop}>
        回到顶部
      </ScrollToTop>:null}
      </HomeWrapper>
    );
  }
  ScrollToTop = () => {
    scrollAnimation(0,document.documentElement.scrollTop)
  }
  componentDidMount() { 
    window.addEventListener('scroll', this.props.getShowFlag)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.getShowFlag)
  }
}
const mapState = (state) => {
  return {
    showScrollTop: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getShowFlag() {
      const scrollTop = document.documentElement.scrollTop

      if (scrollTop >= 50) {
        dispatch(changeScrollState(true))
      } else {
        dispatch(changeScrollState(false))
      }
    }
  }
}
export default connect(mapState, mapDispatch)(Home)