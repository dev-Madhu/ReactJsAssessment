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

const ResourceCard = props => {
  const {cardDetails} = props
  const {title, link, iconUrl, description, category} = cardDetails
  return (
    <Item>
      <IconContainer>
        <Icon src={iconUrl} alt="icon" />
        <TitleBox>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </TitleBox>
      </IconContainer>
      <LinkElement>{link}</LinkElement>
      <Description>{description}</Description>
    </Item>
  )
}

export default ResourceCard
