import { useContext } from "react";
//MUITO IMPORTANTE/ ROTA GLOBAL
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const RotaPrivada = ({ children }) => {
    return children;
};

export { RotaPrivada }