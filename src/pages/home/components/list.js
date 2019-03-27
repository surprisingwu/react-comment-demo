import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ArticleListWrapper,
  ArticleItem,
  ArticleTitle,
  ArticleDesc,
  ArticlePic
} from '../style';

class List extends Component {
  render() {
    const {articleList} = this.props
    return (
      <ArticleListWrapper>
        {articleList.map((item, i) => (
          <ArticleItem>
            <ArticleTitle>{item.get('title')}</ArticleTitle>
            <ArticleDesc>{item.get('desc')}</ArticleDesc>
            {item.get('pic') ? <ArticlePic src={item.get('pic')}></ArticlePic>:null}  
          </ArticleItem>
        ))}
      </ArticleListWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  state.get('articleList')
}

export default connect(mapStateToProps, null)(List)