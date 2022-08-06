import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from './StyledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDesc>
      we are sorry, the page you requested could not be found.
    </NotFoundDesc>
  </NotFoundContainer>
)

export default NotFound
