import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ArticleListWrapper,
  ArticleItem,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
  ArticlePic
} from '../style';

class List extends Component {
  render() {
    const {articleList} = this.props
    console.log(articleList);
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
      </ArticleListWrapper>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    articleList: state.getIn(['home','articleList'])
  }
}
export default connect(mapStateToProps, null)(List)