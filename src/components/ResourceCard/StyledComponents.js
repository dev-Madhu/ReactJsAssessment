import styled from 'styled-components/macro'

export const Item = styled.li`
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  width: 400px;
  height: 250px;
  padding: 24px;
  margin: 16px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  padding: 4px;
  border: 2px solid #d7dfe9;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
`

export const Category = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #7e858e;
`

export const LinkElement = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0b69ff;
`
export const Description = styled(LinkElement)`
  color: #7e858e;
`
