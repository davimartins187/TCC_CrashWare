import { createContext, useState, useEffect } from "react";

//Cria uma Rota Global
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};


export { AuthProvider, AuthContext }