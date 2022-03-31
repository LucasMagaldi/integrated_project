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

const appProvider = ({children}) => {
    const [state, dispach] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispach({ type: DISPLAY_ALERT});
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

export { useAppContext, initialState, appProvider }