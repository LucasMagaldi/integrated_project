import React, {useContext, useReducer} from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';
import reducer from './reducer';


const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '', 
    alertType: ''
}

const appContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispach] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispach({ type: DISPLAY_ALERT});
        const s = state;
        console.log(s);
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(()=>{
            dispach({ type: CLEAR_ALERT})
        }, 3000)
    }

    return (
        <appContext.Provider value={{...state, displayAlert}}>
                {children}
        </appContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(appContext)
}

export { useAppContext, initialState, AppProvider }