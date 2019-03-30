import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CountDown from '../components/CountDown'
import CodeSection from '../components/CodeSection'

class Private extends Component {
  render() {
    return (
      <div>
        <CountDown/>
        <CodeSection/>
      </div>
    )
  }
}

export default withAuth(Private);