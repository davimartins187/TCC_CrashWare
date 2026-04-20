import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotoesForm } from "../../Botoes";
import { CampoTexto } from "../../CampoTexto"
import style from './ConteudoRecSenha.module.css'
const ConteudoRecSenha = () => {

    //Variavel do email
    const [email, setEmail] = useState("");

    //Navegação
    const location = useLocation();
    const Navegacao = useNavigate();


    //validação dos campos
    if (!email.trim()) {
        // novosErros.email = "Campo obrigatório";
        // temErro = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        // novosErros.email = "Email inválido";
        // temErro = true;
    }

    //Proteção de URL
    useEffect(() => {
        const VeiodoLogin = location.state?.origem === "/login";
        if (!VeiodoLogin) {
            Navegacao('/login');
        }
    }, []);

    //Enviar para verificação de Email
    const EnviarVerific = async => {
        if (email != " ") {
            Navegacao("/verificacao-email", {
                state: {
                    //Felipinho vai fazer a requição do nome
                    email: email.replace(/\s/g, "").toLowerCase(),
                    origem: "/recuperar-senha" //origem da rota
                } //State
            } // 
            ) //Navegação
        } //If
    } //Função

    return (
        <div className={style.corpo}>
            <div className={style.container}>
                <h1>Esqueci Minha Senha</h1>
                <h2>Digite seu Email para enviarmos um código de verifiação</h2>
                <CampoTexto type="email" maxLength={120} placeholder="E-mail"
                    className={style.inputClasse}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <BotoesForm texto="Enviar" className={style.btnEnviar}
                onClick={EnviarVerific} //Ativa a função
                />
            </div>
        </div>
    )
}

export { ConteudoRecSenha }