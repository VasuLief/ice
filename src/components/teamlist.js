import React from 'react'
import { connect } from 'react-redux'
import store from '../features/store/store'
import Team from './team'

class TeamList extends React.Component {
  static onClick (id) {
    store.dispatch({type: 'SELECT_TEAM', payload: id})
  }

  render () {
    const teams = this.props.teams.map(team => {
      return <Team key={team.id} {...team} onClick={(ev) => { ev.preventDefault(); this.onClick(team.id) }} />
    })

    return <div id='teams'>
      { teams }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    teams: state.teams,
    users: state.users
  }
}

export default connect(mapStateToProps)(TeamList)
