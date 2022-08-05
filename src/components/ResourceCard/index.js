import {Link} from 'react-router-dom'

import {
  Item,
  IconContainer,
  Icon,
  TitleBox,
  Title,
  Category,
  LinkElement,
  Description,
} from './StyledComponents'

import './index.css'

const ResourceCard = props => {
  const {cardDetails} = props
  const {id, title, link, iconUrl, description, category} = cardDetails
  return (
    <Item>
      <Link to={`/resource/${id}`} className="item-link">
        <IconContainer>
          <Icon src={iconUrl} alt="icon" />
          <TitleBox>
            <Title>{title}</Title>
            <Category>{category}</Category>
          </TitleBox>
        </IconContainer>
        <LinkElement>{link}</LinkElement>
        <Description>{description}</Description>
      </Link>
    </Item>
  )
}

export default ResourceCard
