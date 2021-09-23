import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {fetchProducts} from '../actions/index'

const ProductListing = () => {
    // const products = useSelector((state) => state);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[])

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
