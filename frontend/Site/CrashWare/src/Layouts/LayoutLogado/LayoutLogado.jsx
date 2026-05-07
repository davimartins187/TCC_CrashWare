import { Outlet, Link } from "react-router-dom"
import { Cabecalho, Rodape } from "../../Componentes"
import Logo from '../../Logo/logo_sem_fundo.png';
import style from "./LayoutLogado.module.css"

const LayoutLogado = () => {
    const DataATual = new Date().getFullYear();

    return (
        <>
            <Cabecalho />
            <Outlet />
            {/* <Rodape>
                <footer className={style.Rodape}>
                    <div className={style.Marca}>
                        <Link to="/">
                            <img src={Logo} alt="" />
                            <h4>CRASHWARE</h4>
                        </Link>
                        <p>Plataforma de Aprendizado de Hardware e Software</p>
                    </div>
                    <div className={style.Copy}>
                        <p> ©{DataATual} Crashware. Todos os diretos reservados à equipe de desenvolvimento </p>
                    </div>
                </footer>
            </Rodape> */}
        </>
    )
}

export { LayoutLogado }