import { useState } from "react";
import { BotoesForm } from "../../Botoes";
import { CampoTexto } from "../../CampoTexto"
import style from './ConteudoRecSenha.module.css'
const ConteudoRecSenha = () =>
{
    const [email, setEmail] = useState("");

    const PodeMostarBotao = email != " ";
    return(
        <div className={style.corpo}>
            <div className={style.container}>
                <h1>Esqueci Minha Senha</h1>
                <CampoTexto type="email" maxLength={120} placeholder="E-mail" 
                    className={style.inputClasse} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <BotoesForm texto="Enviar" className={style.btnEnviar} disabled={!PodeMostarBotao}/>
            </div>
        </div>
    )
}

export { ConteudoRecSenha }