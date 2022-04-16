import React, {
    createContext, 
    useContext, 
    useState, 
    ReactNode
} from 'react';

import auth from '@react-native-firebase/auth';

type AuthContextData = {

}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    async function sigIn(email: string, password: string) {

    }

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }