import styled from 'styled-components/macro'

export const ItemBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  padding: 4px;
  border-radius: 50px;
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

export const Navigator = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #7e858e;
`
export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`
export const UpdateBtn = styled.button`
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
`

export const AddBtn = styled(UpdateBtn)`
  background-color: #2dca73;
  margin-right: 20px;
`
export const DeleteBtn = styled(UpdateBtn)`
  background-color: #d7dfe9;
`

export const BtnBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const SideHeading = styled.p`
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 24px;
  line-height: 32px;
  color: #171f46;
`

export const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 600px;
`

export const SortBy = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #171f46;
  font-family: 'Roboto';
`

export const Select = styled.select`
  color: #475569;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  padding: 12px;
  outline: none;
  cursor: pointer;
`

export const Option = styled.option`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`

export const SearchBox = styled.div`
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  width: 100%;
  padding-left: 10px;
  height: 40px;
  display: flex;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  font-weight: 400;
  border: none;
  outline: none;
`
