import styled from 'styled-components';
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background: url(${logoPic}) no-repeat center;
  background-size: contain;
`;

export const Nav = styled.div`
  position: relative;
  margin: 0 auto;
  width: 945px;
  height: 100%;
`;
 
export const NavItem = styled.div` 
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;
 
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  float: left;
  margin-left: 20px;
  margin-top: 9px;
  padding: 0 30rpx 0 20px;
  box-sizing: border-box;
  width: 160rpx;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 40px;
  font-size: 14px;
  color: #777;
  background-color: #eee;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  text-align: center;
  margin-top: 9px;
  margin-right: 20px;
  border-radius: 20px;
  font-size: 15px;
  &.write{
    line-height: 40px;
    width: 100px;
    height: 40px;
    color: #fff;
    background-color: #ea6f5a;
  }
  &.sign{
    line-height: 38px;
    width: 80px;
    height: 38px;
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
  }
`

