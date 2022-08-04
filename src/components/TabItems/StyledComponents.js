import styled from 'styled-components/macro'

export const TabButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  width: 220px;
  border-right: 1px solid #d7dfe9;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  background-color: ${props =>
    props.active ? '#0B69FF' : 'rgba(215, 223, 233, 0.24);'};
  color: ${props => (props.active ? '#fff' : '#171F46')};
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`
