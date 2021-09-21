import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incrNumber, decrNumber } from "./actions/index"

import './style.css'

const Counter = () => {
    const state = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">


                <div className="container">

                    <h1>Increment/Decrement counter</h1>
                    <h4>using React and Redux</h4>

                    <div className="quantity">
                        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decrNumber())}><span>-</span></a>
                        <input name="quantity" type="text" className="quantity__input" value={state} />
                        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incrNumber(5))} ><span>+</span></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Counter


