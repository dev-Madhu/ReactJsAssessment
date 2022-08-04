import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 150%;
  background-color: #fff;
`

export const TabContainer = styled.ul`
  border: 1px solid #d7dfe9;
  display: flex;
  flex-direction: row;
  padding: 0px;
  align-items: center;
  list-style-type: none;
`

export const ResourcesData = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px auto;
  align-self: center;
`

export const SearchBox = styled.div`
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  width: 60%;
  padding-left: 10px;
  height: 40px;
  display: flex;
  margin-top: 30px;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  font-weight: 400;
  border: none;
  outline: none;
`
