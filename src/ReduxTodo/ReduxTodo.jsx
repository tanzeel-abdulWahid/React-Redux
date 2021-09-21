import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from './actions';
import './style.css';

const ReduxTodo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add you list here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Write your Todo" value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(""))}></i>
                    </div>

                    <div className="showItems">
                        {
                            list.map((e) =>( 
                                <div className="eachItem" key={e.id}>
                                <h3>{e.data}</h3>
                                <div className="todo-btn">
                                    {/* <i className="far fa-edit add-btn" onClick={() => editItem(e.id)}></i> */}
                                    <i className="far fa-trash-alt add-btn" title="delete item"
                                        onClick={() => dispatch(deleteTodo(e.id))}></i>
                                </div>
                            </div>
                            
                        ))
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeTodo())}> <span>Check List</span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxTodo;
