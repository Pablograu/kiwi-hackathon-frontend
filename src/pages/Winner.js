import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import WinnerSection from '../components/WinnerSection'
import CodeSection from '../components/CodeSection'
import UpgradeSection from '../components/UpgradeSection'

class Winner extends Component {
  render() {
    return (
      <div>
        <WinnerSection/>
        <CodeSection/>
        <UpgradeSection/>
      </div>
    )
  }
}

export default withAuth(Winner);