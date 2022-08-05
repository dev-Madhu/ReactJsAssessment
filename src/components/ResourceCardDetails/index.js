import {Component} from 'react'
import {MdExpandLess} from 'react-icons/md'
import {BsFilterRight, BsSearch} from 'react-icons/bs'
import Header from '../Header'
import ReactTable from '../ReactTable'
import {
  ItemBox,
  Navigator,
  ResourceContainer,
  IconContainer,
  Icon,
  TitleBox,
  BtnBox,
  UpdateBtn,
  Items,
  AddBtn,
  DeleteBtn,
  Title,
  LinkElement,
  SortByContainer,
  Select,
  SortBy,
  SideHeading,
  SearchBox,
  SearchInput,
  Option,
  Description,
} from './StyledComponents'

import './index.css'

const sortByOptions = [
  {optionId: 'RECENT', displayText: 'Recently Added'},
  {
    optionId: 'ASC',
    displayText: 'Ascending',
  },
  {
    optionId: 'DESC',
    displayText: 'Descending',
  },
]

class ResourceCardDetails extends Component {
  state = {resourceItems: [], specificResource: {}}

  componentDidMount() {
    this.getSpecificResourceDetails()
  }

  getSpecificResourceDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      iconUrl: data.icon_url,
      link: data.link,
      description: data.description,
    }
    const resourceItemData = data.resource_items
    this.setState({
      specificResource: updatedData,
      resourceItems: resourceItemData,
    })
  }

  onClickBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {specificResource, resourceItems} = this.state
    const {title, iconUrl, description, link} = specificResource
    console.log(specificResource)
    console.log(resourceItems)
    return (
      <>
        <Header />
        <ResourceContainer>
          <IconContainer onClick={this.onClickBack}>
            <MdExpandLess className="less-than" />
            <Navigator>Resources</Navigator>
          </IconContainer>
          <ItemBox>
            <IconContainer>
              <Icon src={iconUrl} alt="icon" />
              <TitleBox>
                <Title>{title}</Title>
                <LinkElement>{link}</LinkElement>
              </TitleBox>
            </IconContainer>
            <Description>{description}</Description>
            <UpdateBtn>UPDATE</UpdateBtn>
          </ItemBox>
          <Items>
            <SideHeading>Items</SideHeading>
            <IconContainer>
              <SearchBox>
                <BsSearch size="18" color="#171F46" />
                <SearchInput type="search" placeholder="Search" />
              </SearchBox>
              <SortByContainer>
                <BsFilterRight className="sort-by-icon" />
                <SortBy>Sort</SortBy>
                <Select>
                  {sortByOptions.map(eachOption => (
                    <Option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                      className="select-option"
                    >
                      {eachOption.displayText}
                    </Option>
                  ))}
                </Select>
              </SortByContainer>
            </IconContainer>
          </Items>
          <ReactTable resourceData={resourceItems} />
          <BtnBox>
            <AddBtn>ADD ITEM</AddBtn>
            <DeleteBtn>DELETE</DeleteBtn>
          </BtnBox>
        </ResourceContainer>
      </>
    )
  }
}

export default ResourceCardDetails
