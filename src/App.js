import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
