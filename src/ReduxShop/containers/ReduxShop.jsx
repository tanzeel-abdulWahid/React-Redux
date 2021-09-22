import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import Header from './Header'
import ProductDetails from './ProductDetails'
import ProductListing from './ProductListing'

const ReduxShop = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductListing}/>
                    <Route path="/product/:productId" component={ProductDetails}/>
                    <Route>404 Not found</Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ReduxShop
