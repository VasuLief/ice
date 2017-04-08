import React from 'react'

class Content extends React.Component {
  constructor (props: any, context: any) {
    super(props, context)

    this.state = this.props.store.getState()
  }
  render () {
    return <h3> {JSON.stringify(this.state)} </h3>
  }
}

export default Content
