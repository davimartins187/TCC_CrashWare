import style from "./PLogin.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BotoesForm, TIPO_BOTAO } from "../../Componentes"

const PgLogin = () =>
{

    const [email, setEmail] = useState('')
    // const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    return (
        <>  
            <div className={style.corpo}>
                <Link to="/cadastro">
                <BotoesForm texto='Cadastre-se' tipo={TIPO_BOTAO.CADASTRO} className={style.btncadastro}/>
                </Link>
                <form action="" method="post" autoComplete="on" readOnly>
                    <div className={style.container}>
                        <h1>Login</h1>

                        <input type="email" placeholder="E-Mail" className={style.inputs} onFocus={(e) => e.target.removeAttribute('readonly')} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={120}/>

                        <input type="password" className={style.inputs} placeholder="Senha" readOnly onFocus={(e) => e.target.removeAttribute('readonly')} value={senha} onChange={(e) => setSenha(e.target.value)} maxLength={12}/>

                        {/* { erro && <p className={style.erro}>{erro}</p> } */}
                        <p className = {style.TermosUso}>Ao entrar no <span>CrashWare</span>, você concorda com os nossos termos e politicas de privacidade.</p>
                        <button type="button" className={style.btnCriarConta}>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export { PgLogin }