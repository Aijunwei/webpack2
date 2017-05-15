import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Bundle from './bundle'
import loadAbout from 'bundle-loader?lazy!./loadAbout'
import loadDashboard from 'bundle-loader?lazy!./loadDashboard'
import Home from './home'
// components load their module for initial visit

const About = () => (
  <Bundle load={loadAbout}>
    {(About) => <About/>}
  </Bundle>
)
const Dashboard = () => (
  <Bundle load={loadDashboard}>
    {(Dashboard) => <Dashboard/>}
  </Bundle>
)

class App extends React.Component {
  componentDidMount() {
    // preloads the rest
    // loadAbout(() => {})
    // loadDashbaord(() => {})
  }

  render() {
    return (
    <Router>
      <div>
        <ul>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
        </ul>

        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    </Router>
    )

  }
}

export default App;
