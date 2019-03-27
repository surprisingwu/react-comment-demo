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

export const BannerImg = styled.div`
  width: 100%;
  height: 270px;
`;
export const HomeRight = styled.div `
  float: right;
  width: 240px;
`;
export const ArticleListWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;
export const ArticleItem = styled.div`
  display: flex;
  position: relative;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  justify-content:center;
  word-wrap: break-word;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
`;
export const ArticleContent = styled.div`
  flex: 1;
`;
export const ArticleTitle = styled.h3`
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
export const ArticleDesc = styled.p`
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
