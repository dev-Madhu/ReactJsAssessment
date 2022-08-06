import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import {NavHeader, NavContent, WebsiteLogo, Profile} from './StyledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavHeader>
      <NavContent>
        <WebsiteLogo
          src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618156/NxtWave_TM_Coloured_logo_1_fccj3g.svg"
          alt="website logo"
        />

        <Profile
          src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618307/image_tfkjqy.svg"
          alt="profile"
          onClick={onClickLogout}
        />
      </NavContent>
    </NavHeader>
  )
}

export default withRouter(Header)
