import styled from 'styled-components';

export const SwipeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;
export const SwipeItem = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  z-index: 1;
  transform: translate3d(0,0,0);
`;
export const SwipeContent = styled.a.attrs({
  href: '#'
})`
  width: 100%;
  height: 100%;
  .img{
    width: 100%;
    height: 100%;
  }
`;

export const SwipeLeftArrow = styled.div``;
export const SwipeRightArrow = styled.div``;
export const SwipeDots = styled.div``;
