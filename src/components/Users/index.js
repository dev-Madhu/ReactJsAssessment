import {MdExpandLess} from 'react-icons/md'
import Header from '../Header'

import {
  IconContainer,
  Navigator,
  UsersContainer,
  ItemDetailsForm,
  Heading,
  LabelElement,
  InputElement,
  CreateBtn,
  Image,
  DescriptionBox,
  LinkElement,
  FormView,
  Container,
} from './StyledComponents'

const Users = props => {
  const onBackToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const onSubmitItemDetails = event => {
    event.preventDefault()
  }

  return (
    <>
      <Header />
      <UsersContainer>
        <FormView>
          <IconContainer onClick={onBackToHome}>
            <MdExpandLess className="less-than" />
            <Navigator>Users</Navigator>
          </IconContainer>
          <ItemDetailsForm onSubmit={onSubmitItemDetails}>
            <Container>
              <Heading>Item Details</Heading>
              <LabelElement htmlFor="item-name">Item Name</LabelElement>
              <InputElement id="item-name" />
              <LabelElement htmlFor="link">Link</LabelElement>
              <LinkElement id="link" />
              <LabelElement htmlFor="resource-name">Resource Name</LabelElement>
              <InputElement id="resource-name" />
              <LabelElement htmlFor="description">Description</LabelElement>
              <DescriptionBox id="description" type="text" />
              <CreateBtn type="submit">Create</CreateBtn>
            </Container>
          </ItemDetailsForm>
        </FormView>

        <Image src="https://images.unsplash.com/photo-1549776904-3ec1fcd4b13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </UsersContainer>
    </>
  )
}

export default Users
