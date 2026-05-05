import { Outlet } from "react-router-dom"
import { Cabecalho, Rodape } from "../../Componentes"
import Logo from '../../Logo/logo_sem_fundo.png';
import style from "./LayoutLogado.module.css"

const LayoutLogado = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape>
            </Rodape>
        </>
    )
}

export { LayoutLogado }