import React from 'react'
import { connect } from 'react-redux'
import store from '../features/store/store'
import User from './user'

class UserList extends React.Component {
  static onClick (id) {
    store.dispatch({type: 'SELECT_USER', payload: id}).bind(this)
  }

  render () {
    const users = this.props.users.filter(user => user.team_id === this.props.team).map(user => {
      return <User key={user.id} {...user} onClick={(ev) => { ev.preventDefault(); UserList.onClick(user.id) }} />
    })

    return <div id='users'>
      { users }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    team: state.cart.team
  }
}

export default connect(mapStateToProps)(UserList)
