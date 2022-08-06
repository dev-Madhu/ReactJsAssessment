import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import TabItems from '../TabItems'
import ResourceCard from '../ResourceCard'

import {
  HomeContainer,
  TabContainer,
  ResourcesData,
  SearchBox,
  SearchInput,
} from './StyledComponents'

const tabsList = [
  {tabId: 'RESOURCES', displayText: 'Resources'},
  {tabId: 'REQUESTS', displayText: 'Requests'},
  {tabId: 'USERS', displayText: 'Users'},
]

class Home extends Component {
  state = {activeTabId: tabsList[0].tabId, resourcesList: [], searchInput: ''}

  componentDidMount() {
    this.getResourcesDetails()
  }

  getResourcesDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const apiUrl = `https://media-content.ccbp.in/website/react-assignment/resources.json`
      const options = {
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(data => ({
        id: data.id,
        title: data.title,
        iconUrl: data.icon_url,
        link: data.link,
        description: data.description,
        category: data.category,
        tag: data.tag,
      }))
      this.setState({resourcesList: updatedData})
    }
  }

  clickTabItem = optionId => {
    this.setState({activeTabId: optionId})
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {activeTabId, searchInput, resourcesList} = this.state
    console.log(activeTabId)

    return (
      <>
        <Header />
        <HomeContainer>
          <TabContainer>
            {tabsList.map(tabDetails => (
              <TabItems
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === tabDetails.tabId}
              />
            ))}
          </TabContainer>
          <SearchBox>
            <BsSearch size="18" color="#171F46" />
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchValue}
            />
          </SearchBox>
          <ResourcesData>
            {resourcesList.map(eachData => (
              <ResourceCard cardDetails={eachData} key={eachData.id} />
            ))}
          </ResourcesData>
        </HomeContainer>
      </>
    )
  }
}

export default Home
