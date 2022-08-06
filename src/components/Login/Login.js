import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginMobileImg,
  InputContainer,
  UsernameInput,
  LoginDesktopImg,
  LoginButton,
  LoginImg,
  LoginFormContainer,
  FormContainer,
  ErrorMessage,
  PasswordInput,
  InputLabel,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInput
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME:</InputLabel>
        <UsernameInput
          type="text"
          id="username"
          name="phone"
          placeholder="Enter UserName"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <LoginMobileImg
          src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618156/NxtWave_TM_Coloured_logo_1_fccj3g.svg"
          alt="website logo"
        />
        <LoginImg
          src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618156/NxtWave_TM_Coloured_logo_1_fccj3g.svg"
          alt="website login"
        />
        <FormContainer onSubmit={this.submitForm}>
          <LoginDesktopImg
            src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618156/NxtWave_TM_Coloured_logo_1_fccj3g.svg"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
