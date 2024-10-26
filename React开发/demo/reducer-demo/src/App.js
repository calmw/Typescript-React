import {useReducer} from "react";


function listReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        return [...state, {
            id: action.payload.id,
            value: action.payload.value,
            //...state[state.length - 1]  // 如果是数组，可以用该方式直接添加到最后
        }]
    } else if (action.type === "DELETE_ITEM") {
        const newState = [...state];
        newState.splice(action.value, 1);
        return newState;
    }
    return state
}


function App() {
    const [list, dispatch] = useReducer(listReducer, [{
            id: 1,
            value: 1
        }],
    );

    function handleBtnClick() {
        const action = {
            type: "ADD_ITEM",
            payload: {
                id: Math.random(),
                value: Math.random()
            }
        }
        dispatch(action);
    }

    function handleItermClick(index) {
        const action = {
            type: "DELETE_ITEM",
            value: index,
        }
        dispatch(action);
    }

    return (
        <div>
            <div>
                {/*<input value={inputValue} onChange={handleInputChange}/>*/}
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return <li key={item.id} onClick={() => handleItermClick(index)}>{item.value}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
