import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ResourceCardDetails from './components/ResourceCardDetails'
import Login from './components/Login/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Users from './components/Users'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/resources" component={Home} />
    <ProtectedRoute exact path="/users" component={Users} />
    <ProtectedRoute
      exact
      path="/resource/:id"
      component={ResourceCardDetails}
    />
    <Route component={NotFound} />
  </Switch>
)

export default App
