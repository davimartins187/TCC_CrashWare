import { useState } from "react";
import { Link } from "react-router-dom";
import { CampoTexto } from "../../CampoTexto"
import { BotoesForm, TIPO_BOTAO } from "../../Botoes";
import style from './ConteudoLogin.module.css'

const ConteudoLogin = () =>
{
    const [readonly, setReadonly] = useState(true);
    const [senha, setSenha] = useState(true)
    return (
        <div className={style.Corpo}>
            <Link to="/cadastro">
                <BotoesForm texto='Cadastre-se' tipo={TIPO_BOTAO.CADASTRO} className={style.btncadastro}/>
            </Link>
            <form action="" method="post">
                <div className={style.container}>

                    <h1>Login</h1>
                    <div className={style.inserir}>
                        <CampoTexto type="email" placeholder="Email" className={style.inputs} readOnly={readonly} onFocus={() => setReadonly(false)}/>
                        <CampoTexto type="password" placeholder="Senha" className={style.inputs} readOnly={senha} onFocus={() => setSenha(false)} />
                    </div>
                    <p className = {style.TermosUso}>Ao entrar no <span>CrashWare</span>, você concorda com os nossos termos e politicas de privacidade.</p>
                    
                    <button type="button" className={style.btnCriarConta}>
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export { ConteudoLogin }