import { useState, useEffect } from "react";
import { Link, useBlocker, useLocation, useNavigate } from "react-router-dom";
import { CampoTexto } from "../../CampoTexto";
import { BotoesForm } from "../../Botoes";
import style from './CVerificacaoEmail.module.css'

const CVerificacaoEmail = () => {

    //Timer de reenviar o código
    const [timer, setTimer] = useState(60);

    //Mensagem de loading
    const [loading, setLoading] = useState(false);

    //Verificador Automatico7
    // const [verificando, setVerificando] = useState(false);

    //useState que guardará a o codigo
    const [codigo, setCodigo] = useState("");

    //Erro Código
    const [erro, setErro] = useState("");

    //Receberá as informações da página anterior
    const location = useLocation();
    const Navegacao = useNavigate();

    //Modal de confirmação
    // const [mostrarModal, setMostrarModal] = useState(false);

    //Bloquear atualizer página
    // const Bloqueador = useBlocker(!podeNavegar);

    // Bloqueia botão voltar do navegador
    // useEffect(() => {
    //     // Empurra um estado extra no histórico para capturar o "voltar"
    //     window.history.pushState(null, '', window.location.href);

    //     const handlePopState = () => {
    //         // Quando usuário tenta voltar, empurra de volta e mostra modal
    //         window.history.pushState(null, '', window.location.href);
    //         setMostrarModal(true);
    //     };

    //     window.addEventListener('popstate', handlePopState);
    //     return () => window.removeEventListener('popstate', handlePopState);
    // }, []);

    // Bloqueia F5, Ctrl+R e botão de recarregar do navegador
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };

        const bloquearAtalhos = (e) => {
            if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
                e.preventDefault();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('keydown', bloquearAtalhos);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('keydown', bloquearAtalhos);
        };
    }, []);

    //Pega os dados
    const mensagem = location.state?.mensagem;
    const email = location.state?.email;
    const nome = location.state?.nome;

    //Nome maiusculo
    const nomeM = nome.toUpperCase();

    //Proteção da url
    useEffect(() => {
        if (!mensagem && !email && !nome) {
            Navegacao('/cadastro');
        }
    }, []);

    //Automação
    useEffect(() => {
        if (codigo.length === 6 && !verificando) {
            handleVericarEmail()
        }
    }, [codigo]);

    //Temporizador
    useEffect(() => {
        if (timer === 0) return;

        const intervalo = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, [timer]);

    //Função de reenviar o código
    const ReenviarCodigo = async () => {
        if (loading || timer > 0) return;
        setLoading(true);

        try {
            const response = await fetch(
                "https://api-crashware.onrender.com/auth/reenviar_codigo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email
                    })
                }
            );

            if (!response.ok) {
                const erro = await response.json();
                //Mostrar  "erro.detail"
            } else {
                setTimer(60);

            }

        } catch (error) {
            console.log(error);
            alert("Erro ao reenviar código");
        } finally {
            setLoading(false);
        }


    }

    const handleVericarEmail = async () => {
        try {
            const response = await fetch(
                "https://api-crashware.onrender.com/auth/verificar_email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        codigo: codigo.toString(),
                        email: email
                    })
                }
            );

            if (response.ok === false) {

                const erroCodigo = await response.json()
                setErro(erroCodigo.detail)
            } else {
                setErro("");
                setPodeNavegar(true)
                Navegacao("/login")
                // , { replace: true }
            }

        } catch (error) {
            console.log("Erro de conexão:", error);
        }
    };

    return (
        <>
        {/* modal */}
            {/* {mostrarModal && (
                <div className={style.modalOverlay}>
                    <div className={style.modal}>
                        <p>Tem certeza que deseja sair? O código será perdido.</p>
                        <button onClick={() => {
                            setMostrarModal(false);
                            Navegacao('/cadastro', { replace: true });
                        }}>
                            Sair
                        </button>
                        <button onClick={() => setMostrarModal(false)}>
                            Ficar
                        </button>
                    </div>
                </div>
            )} */}
            <div className={style.corpo}>
                <div className={style.container}>
                    <h1>Bem-Vindo {nomeM}!!!</h1>
                    <p className={style.texto}>Verifique o Código enviado para o email: {email} </p>

                    <CampoTexto type="text" placeholder="Código"
                        className={style.inputClasse}
                        value={codigo}
                        maxLength={6}
                        onChange={(e) => {
                            const valor = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setCodigo(valor); //Só aceita números.
                        }}
                    />

                    {erro && <p className={style.erro}>{erro}</p>}


                    {/* <Link  to=""> */}
                    <BotoesForm texto="Verificar" className={style.btnEnviar}
                        onClick={handleVericarEmail}
                    //disabled={!PodeMostarBotao}
                    />
                    {/* </Link> */}

                    <BotoesForm
                        texto={loading ? "Espere..." : timer > 0 ? `Reenviar em ${timer}s` : "Reenviar Código"} className={style.btnEnviar}
                        onClick={ReenviarCodigo}
                        disabled={timer > 0 || loading}
                    />
                </div>
            </div>
        </>
    )
}

//exportação da função
export { CVerificacaoEmail }