import React, { Component } from 'react';
import { DetailWrapper, DetailHeader, Contents } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
  render() {
    const { title, content } = this.props
    console.log(this.props)
    return (
      <DetailWrapper>
        <DetailHeader>
         {title}
        </DetailHeader>
        <Contents dangerouslySetInnerHTML={{ __html: content }}/>
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailInfo()
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = (dispatch) => ({
  getDetailInfo() {
    dispatch(actionCreators.getDetail())
  }
})
export default connect(mapState, mapDispatch)(Detail) 