import {NavHeader, NavContent, WebsiteLogo, Profile} from './StyledComponents'

const Header = () => (
  <NavHeader>
    <NavContent>
      <WebsiteLogo
        src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618156/NxtWave_TM_Coloured_logo_1_fccj3g.svg"
        alt="website logo"
      />

      <Profile
        src="https://res.cloudinary.com/ccbp-nxt-wave/image/upload/v1659618307/image_tfkjqy.svg"
        alt="profile"
      />
    </NavContent>
  </NavHeader>
)

export default Header
