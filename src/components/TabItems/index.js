import {ListItem, TabButton} from './StyledComponents'

const TabItems = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <ListItem>
      <TabButton type="button" active={isActive} onClick={onClickTabItem}>
        {displayText}
      </TabButton>
    </ListItem>
  )
}

export default TabItems
