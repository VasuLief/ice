import React from 'react'
import { connect } from 'react-redux'
import Product from './product'

class ProductList extends React.Component {
  render () {
    const products = this.props.products.map(product => {
      return <Product key={product.id} {...product} />
    })

    return <div id='products'>
      { products }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList)
