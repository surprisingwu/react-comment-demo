import React, {Component} from 'react'
import { WriterWrapper, WriterHeader, WriterList, WriterItem, WriteChange } from '../style'
import { connect } from 'react-redux';
import { getWriters } from '../store/actionCreators';
class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <WriterHeader>
          <span className='txt'>推荐作者</span>
          <WriteChange className='opts' href='12'>
            <i className='icon iconfont'>&#xe689;</i>
            换一批
          </WriteChange>
        </WriterHeader>
        <WriterList>
          {this.props.writers.map((item, i) =>
            <WriterItem key={i}>
              <img className='avatar' alt='' src={item.avatar_source} />
              <div className='content'>
                <h3 className='nickname'>{item.nickname}</h3>
                <span className='desc'>写了{item.total_wordage}字 · {item.total_likes_count}喜欢</span>
              </div>
              <div className='opts'>
                关注
              </div>
            </WriterItem>
          )}
        </WriterList>
      </WriterWrapper>
    )
  }

  componentDidMount() { 
    this.props.getWriters()
  }
}
const mapState = (state) => {
  return {
    writers: state.getIn(['home','writers'])
  }
}

const mapDispatch = (dispatch) => { 
  return {
    getWriters() { 
      dispatch(getWriters())
    }
  }
} 
export default connect(mapState, mapDispatch)(Writer)
