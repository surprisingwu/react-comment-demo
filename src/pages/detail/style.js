import styled from 'styled-components';

export const DetailWrapper = styled.div `
  overflow: hidden;
  margin: 0 auto;
  padding: 20px 0 40px 0;
  width: 620px;
`;

export const DetailHeader = styled.h2`
  margin: 20px 0 0;
  line-height: 44px;
  font-size: 34px;
  font-weight: 700;
`;

export const Contents = styled.div`
  img {
    margin: 20px 0;
    width: 100%;
  }
  p {
    margin: 0 0 20px;
    line-height: 27px;
    font-size: 16px;
    color: #2f2f2f;
  }
`;