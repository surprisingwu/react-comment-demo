import styled from 'styled-components';

export const HomeWrapper = styled.div `
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div `
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`;

export const BannerImg = styled.div `
  width: 100%;
  height: 270px;
`;
export const HomeRight = styled.div `
  float: right;
  width: 280px;
  margin-left: 40px;
`;
export const ArticleListWrapper = styled.div `
  position: relative;
  box-sizing: border-box;
`;
export const ArticleItem = styled.div `
  display: flex;
  position: relative;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  justify-content:center;
  word-wrap: break-word;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
`;
export const ArticleContent = styled.div `
  flex: 1;
`;
export const ArticleTitle = styled.h3 `
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
export const ArticleDesc = styled.p `
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`;
export const ArticlePic = styled.img.attrs({
  alt: ''
})`
  flex: 0 0 150px;
  margin-left: 15px;
  width: 150px;
  height: 100px;
  border-radius: 4px;
`;

export const RecommendWrapper = styled.div `
  width: 100%;
  padding-top: 30px;
`;
export const RecommendItem = styled.div `
  width: 100%;
`;
export const RecommendImg = styled.img.attrs({
  alt: ''
})`
  width: 100%;
  min-height: 50px;
`;

export const WriterWrapper = styled.div `
  width: 100%;
  margin-top: 20px;
`;
export const WriterHeader = styled.div `
  display: flex;
  justify-content: space-between;
  line-height: 19px;
  font-size: 14px;
  color: #969696;
  .txt{
    
  }
`;
export const WriteChange = styled.a.attrs({
  href: '2112'
})`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  color: #969696;
  &:hover{
      color: #2f2f2f;
  }
  .icon{
    display: inline-block;
    font-size: 20px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
    transform: rotate(80deg);
  }
`;
export const WriterList = styled.div`

`;
export const WriterItem = styled.div`
  display: flex;
  margin-top: 20px;
  .avatar{
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .nickname{
      padding-top: 5px;
      font-size: 14px;
      color: #333;
    }
    .desc{
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .opts {
    flex: 1;
    text-align: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`;

export const LoadMore = styled.div`
  margin: 30px auto;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  background-color: #d5d5d5;
  color: #fff;
  cursor: pointer;
`;
export const ScrollToTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 9999;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  font-size: 14px;
  padding: 10px;
`;