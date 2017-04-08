import React from 'react'

class Content extends React.Component {
  constructor (props: any, context: any) {
    super(props, context)

    this.state = this.props.store.getState()
  }
  render () {
    return <h3>{Object.keys(this.state).map(key => {
      if (this.state[key].length) {
        return this.state[key].map(team => {
          return team.name
        })
      }
    })}
    </h3>
  }
}

export default Content
