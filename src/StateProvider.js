import React, {createContext, useContext, useReducer } from 'react';
import App from './App';

export const StateContext = createContext();

export const StateProvider = ({ reducer,
    initialState, Children }) => (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            <App />
        </StateContext.Provider>
    )

export const useStateValue = () => useContext(StateContext);