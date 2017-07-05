import React from 'react'

export default class Team extends React.Component {
  render () {
    return <div>
      <h3>
        Team: <a href='' onClick={this.props.onClick}>{this.props.name}</a>
      </h3>
    </div>
  }
}
