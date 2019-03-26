import styled from 'styled-components';

export const SwipeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const SwipeContainer = styled.ul`
  position: absolute;
  height: 100%;
  white-space: nowrap;
  transition: all 0.3s ease-in;
  top: 0;
  bottom: 0;
`;
export const SwipeItem = styled.li`
  position: relative;
  float: left;
  height: 100%;
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
