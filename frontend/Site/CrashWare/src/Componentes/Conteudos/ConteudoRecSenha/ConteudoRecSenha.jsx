import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotoesForm } from "../../Botoes";
import { CampoTexto } from "../../CampoTexto"
import { PopUp } from "../../pop-up";



import style from './ConteudoRecSenha.module.css'
import { Api } from "../../../../funcoes/functions";
const ConteudoRecSenha = () => {

    //Variavel do email
    const [email, setEmail] = useState("");

    //Navegação
    const location = useLocation();
    const Navegacao = useNavigate();

    //Controle de Navegação
    const rec_senha = localStorage.getItem("rec_senha")

    //Popup
    const [popup, setPopup] = useState(null);


    //Proteção de URL
    useEffect(() => {
        const VeiodoLogin = location.state?.origem === "/login";
        if (!VeiodoLogin) {
            Navegacao('/login');
        }
    }, []);


    //Enviar para verificação de Email
    const VerificarEmail = async () => {
        //Instâncio o objeto 
        const usuario = new Api(email,setPopup,Navegacao);

        //Chamo o método
        usuario.Verificar_Email(email,setPopup,Navegacao)

    }//Função


    return (
        <>
            {popup && (
                <PopUp
                    tipo={popup.tipo}
                    titulo={popup.titulo}
                    mensagem={popup.mensagem}
                    onFechar={() => setPopup(null)}
                />
            )}


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
                onClick={VerificarEmail} //Ativa a função
                />
            </div>
        </div>
        </>
    )
}

export { ConteudoRecSenha }