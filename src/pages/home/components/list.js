import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ArticleListWrapper,
  ArticleItem,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
  ArticlePic,
  LoadMore
} from '../style';
import { getLoadMore } from '../store/actionCreators';

class List extends Component {
  render() {
    const {articleList, loadMore} = this.props
    return (
      <ArticleListWrapper>
        {articleList.map((item, i) => (
          <ArticleItem key={i}>
            <ArticleContent>
              <ArticleTitle>{item.get('title')}</ArticleTitle>
              <ArticleDesc>{item.get('desc')}</ArticleDesc>
            </ArticleContent>
            {item.get('pic') ? <ArticlePic src={item.get('pic')}></ArticlePic>:null}  
          </ArticleItem>
        ))}
        <LoadMore onClick={loadMore}>
          阅读更多
        </LoadMore>
      </ArticleListWrapper>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    articleList: state.getIn(['home','articleList'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    loadMore() {
      dispatch(getLoadMore())
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(List)