import styled from 'styled-components/macro'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 100px;
`

export const Navigator = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #7e858e;
`

export const UsersContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FormView = styled.div`
  width: 100%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CreateBtn = styled.button`
  background-color: #0b69ff;
  padding: 8px 20px;
  height: 40px;
  align-self: flex-start;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto';
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`

export const ItemDetailsForm = styled.form`
  width: 100%;
  padding: 64px 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  color: #171f46;
`

export const InputElement = styled.input`
  height: 40px;
  width: 320px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  color: #171f46;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
`

export const DescriptionBox = styled(InputElement)`
  height: 60px;
`

export const LinkElement = styled(InputElement)`
  color: #0b69ff;
`
export const LabelElement = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #7e858e;
  margin-top: 20px;
`
export const IconView = styled.div`
  width: 50%;
`
export const Image = styled.img`
  width: 720px;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
