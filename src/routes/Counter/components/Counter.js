import React from 'react'
import * as Button from '@klarna/ui/Button'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <Button.Primary className='btn btn-default' onClick={props.increment}>
      Increment
    </Button.Primary>
    {' '}
    <Button.Secondary className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </Button.Secondary>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
