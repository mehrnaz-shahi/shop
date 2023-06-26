import React, {useReducer} from 'react';


const intialAge = {
    age: 20,
    pro: '$',
}
const reducer  = (state, action) => {
    if (action.type === 'incremented_age') {
    return {
        ...state,
      age: state.age + 1,
    }
  }
  else if(action.nation === 'iranian'){
    return {
        ...state,
        age: state.age + 100,
        pro: 'rial',
    }
  }
  throw Error('Unknown action.');
}

const Counter = () => {
const [state, dispatch] = useReducer(reducer, intialAge);

    return (
        <div>
            
            <button onClick={() => {
                dispatch({ type: 'incremented_age', nation: 'iranian' })
                }}>
            Increment age
            </button>
            <button onClick={() => {
                dispatch({ nation: 'iranian'  })
                }}>
            iranian age
            </button>

            <p>Hello! You are {state.age}. and money {state.pro}</p>
            
        </div>
    );
};

export default Counter;