import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const allValues = useFirebase();
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;