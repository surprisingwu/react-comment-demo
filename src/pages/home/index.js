import React, { Component } from 'react';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import Swipe from '../../common/Swipe'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BannerImg
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
      </HomeWrapper>
    );
  }
}

export default Home