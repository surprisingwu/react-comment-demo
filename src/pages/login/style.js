import styled  from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #f1f1f1;
`;
export const LoginContainer = styled.div`
  position: relative;
  margin: 100px auto 0;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const LoginInput = styled.input`
  display: block;
  margin: 10px auto;
  width: 200px;
  height: 30px;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  background-color: rgba(0,0%,71%,.1);
`;

export const LoginButton = styled.div`
  margin: 20px auto 0;
  width: 200px;
  padding: 9px 18px;
  text-align: center;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: #3194d0;
  color: #fff;
`;