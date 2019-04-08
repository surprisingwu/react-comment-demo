import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { 
  LoginWrapper,
  LoginContainer,
  LoginButton,
  LoginInput
} from './style';
import {
  setLogin
} from './store/actionCreators';


class Login extends PureComponent {
  render() {
    const { login } = this.props;

    if(!login) {
      return (
        <LoginWrapper>
          <LoginContainer>
            <LoginInput placeholder='手机号或邮箱' ref={(input) => this.phone = input}/>
            <LoginInput placeholder='密码' ref={(input) => this.password = input}/>
            <LoginButton onClick={this.handleChange}>登录</LoginButton>
          </LoginContainer>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
    
  }
  handleChange = () => {
    const phone = (this.phone && this.phone.value) || '';
    const password = (this.password &&this.password.value) || '';
    if(phone && password) {
      this.props.loginHandler()
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => ({
  loginHandler() {
    dispatch(setLogin())
  }
})
export default connect(mapState, mapDispatch)(Login);