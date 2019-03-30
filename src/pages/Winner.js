import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import WinnerSection from '../components/WinnerSection'
import CodeSection from '../components/CodeSection'
import UpgradeSection from '../components/UpgradeSection'

class Winner extends Component {

  handleClick = () => {
    this.props.history.push('/booking')
  }

  render() {
    return (
      <div>
        <WinnerSection handleClick={this.handleClick}/>
        <CodeSection/>
        <UpgradeSection/>
      </div>
    )
  }
}

export default withAuth(Winner);