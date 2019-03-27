import styled from 'styled-components';

export const SwipeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const SwipeContainer = styled.ul`
  position: relative;
  height: 100%;
  white-space: nowrap;
`;
export const SwipeItem = styled.li`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: opacity 0.3s ease-in;
  opacity: 0;
  &.active{
    opacity: 1;
  }
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
