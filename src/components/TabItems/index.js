import {Link} from 'react-router-dom'
import {ListItem, TabButton} from './StyledComponents'

const TabItems = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const resourceLink = displayText.toLowerCase()
  return (
    <ListItem>
      <Link to={`/${resourceLink}`}>
        <TabButton type="button" active={isActive} onClick={onClickTabItem}>
          {displayText}
        </TabButton>
      </Link>
    </ListItem>
  )
}

export default TabItems
