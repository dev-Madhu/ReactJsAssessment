import styled from 'styled-components/macro'

export const NavHeader = styled.div`
  width: 100%;
  background-color: #ffff;
  border-bottom: 2px solid #d7dfe9;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
`

export const WebsiteLogo = styled.img`
  object-fit: cover;
`

export const Profile = styled.img`
  object-fit: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
