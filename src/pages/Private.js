import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CountDown from '../components/CountDown'
import CodeSection from '../components/CodeSection'
import UpgradeSection from '../components/UpgradeSection'

class Private extends Component {
  render() {
    return (
      <div>
        <CountDown/>
        <CodeSection/>
        <UpgradeSection/>
      </div>
    )
  }
}

export default withAuth(Private);