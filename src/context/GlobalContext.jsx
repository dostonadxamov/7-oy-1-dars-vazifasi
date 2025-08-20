import { useReducer, createContext } from "react";

export const Globalcontext = createContext();


const changeState = (state, action) => {
    console.log(state);
    
    const { type, payload } = action
    switch (type) {
        case "ADD_TO_CART":
            return { ...state, Yourcart: [...state.Yourcart, payload] }
        case "REMOVE_CART":
            return {
                ...state, Yourcart: state.Yourcart.filter((item) => {
                    item.id !== payload
                })
            }
        case "DECREMENT_AMOUNT":
            return {
                ...state, Yourcart: state.Yourcart.map((item) => {
                    if (item.id == payload) {
                        return { ...item, amount: item.amount - 1 }
                    } else {
                        return item
                    }
                })
            }
        case "INCREMENT_AMOUNT":
            return {
                ...state, Yourcart: state.Yourcart.map((item) => {
                    if (item.id == payload) {
                        return { ...item, amount: item.amount + 1 }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
}


export const GlobalcontextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(changeState, {
        Yourcart: [],
    })
    console.log(state);
    
    return(
        <Globalcontext.Provider value={{ ...state, dispatch }}>
            {children}
        </Globalcontext.Provider>
    )
}
