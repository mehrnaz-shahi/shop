import React, {useReducer, createContext} from 'react';


export const CardContext = createContext();

const intialState = {
    selectedItem: [],
    itemCounter: 0,
    totalPrice: 0,
    checkout: false,

}

const sumItems = item => {
    const itemCounter  = item.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = item.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
    return {itemCounter, totalPrice};
}

const cardReduceer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return{
                ...state,
                selectedItem: [...state.selectedItem],
                ...sumItems(state.selectedItem),
                checkout: false,
            }
        case "REMOVE-ITEM":
            const newSelected = state.selectedItem.filter(item => item.id !== action.payload.id);

            // const indx3 = state.selectedItem.findIndex(item => item.id === action.payload.id);
            // delete state.selectedItem[indx3];
            return {
                ...state,
                selectedItem: newSelected,
                ...sumItems(newSelected)
            }
        case "INCREASE":
            const indx = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indx].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItem)
            }
        case "DECREASE":
            const indx2 = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indx2].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItem)
            }
        case "CHECKOUT":
            return{
                selectedItem: [],
                itemCounter: 0,
                totalPrice: 0,
                checkout: true,
            }
        case "CLEAR":
            return{
                selectedItem: [],
                itemCounter: 0,
                totalPrice: 0,
                checkout: false,
            }
        default:
            return state;
        
    }
}


const CardContextProvider = ({children}) => {

    const [state, dispatch]= useReducer(cardReduceer, intialState);

    return (
        <CardContext.Provider value={{state, dispatch}}>
            {/* or
            <CardContext.Provider value={{state: state, dispatch: dispatch}}> */}
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;