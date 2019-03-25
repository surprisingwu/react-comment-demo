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
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
  }
  &.focused>input{
    width: 240px;
  }
  &.focused>i{
    background-color: #969696;
    color: #fff;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  float: left;
  margin-left: 20px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 40px;
  font-size: 14px;
  color: #666;
  background-color: #eee;
  &.slide-enter, &.slide-exit{
    transition: all 0.5s ease-in-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
`;

export const SearchInfoWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 20px;
  padding: 20px 20px 10px;
  width: 240px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &::before {
    position: absolute;
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoHeader = styled.div`
  height: 20px;
`;
export const SearchInfoTitle = styled.span`
  float: left;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoChange = styled.a`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  &:hover{
    color: #2f2f2f;
  }
  .spin{
    display: inline-block;
    font-size: 20px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
    transform: rotate(80deg);
  }
`;
export const SearchInfoList = styled.div`
  margin-top: 10px;
`;
export const SearchInfoItem = styled.div`
  display: inline-block;
  margin-right: 10px;
  line-height: 28px;
`;
export const SearchInfoContent = styled.a`
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:hover {
    color: #2f2f2f;
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

