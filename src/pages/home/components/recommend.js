import React from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem,
  RecommendImg
} from '../style';
const Recommend = (props) => {
    return (
      <RecommendWrapper>
        {props.picList.map((item, i) => 
          <RecommendItem key={i}>
            <RecommendImg src={item.get('pic')} />
          </RecommendItem>
        )}
      </RecommendWrapper>
    )
}

const mapState = (state) => { 
  return {
    picList: state.getIn(['home','recommendList'])
  }
}
export default connect(mapState,null)(Recommend)