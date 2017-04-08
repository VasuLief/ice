import React from 'react'
import { connect } from 'react-redux'
import store from '../features/store/store'
import StoreAPI from '../features/api/store.api'
import Team from './team'

class TeamList extends React.Component {

  componentDidMount () {
    this.loadTeams()
  }

  loadTeams () {
    const storeAPI = new StoreAPI()
    storeAPI.getUsers().then(users => store.dispatch({type: 'ADD_USER', payload: users}))
    storeAPI.getTeams().then(teams => store.dispatch({type: 'ADD_TEAM', payload: teams}))
  }

  render () {
    console.log(this.props.users)
    console.log(this.props.teams)
    const teams = this.props.teams.map(team => {
      const teamUsers = this.props.users.filter(user => user.team_id === team.id)
      return <Team key={team.id} {...team} users={teamUsers} />
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
