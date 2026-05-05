import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Style from "./ConteudoConfiguracoes.module.css";

import perfilModoClaro from "../../../fotos/claro/login_icon_claro.svg";
import perfilModoEscuro from "../../../fotos/escuro/login_icon.svg";

import sairContaModoClaro from "../../../fotos/claro/sairConta.svg";
import sairContaModoEscuro from "../../../fotos/escuro/sairConta.svg";

import desativarConta from "../../../fotos/desativarConta.svg";
import excluirConta from "../../../fotos/excluirConta.svg";

import sobreModoClaro from "../../../fotos/claro/Sobre.svg";
import sobreModoEscuro from "../../../fotos/escuro/Sobre.svg";

import termosModoClaro from "../../../fotos/claro/termos.svg";
import termosModoEscuro from "../../../fotos/escuro/termos.svg";

import googleIcon from "../../../fotos/google.png";
import githubIcon from "../../../fotos/github.png";

const ItemBarraLateral = ({ descricao, img, onClick }) => {
    return (
        <div className={Style.itemBarraLateral} onClick={onClick}>
            <img src={img} alt={descricao} />
            <span>{descricao}</span>
        </div>
    );
};

const ConteudoConfiguracoes = () => {
    const [tema, setTema] = useState(localStorage.getItem('TemaSelecionado') || 'Claro');
    const [telaSelecionada, setTelaSelecionada] = useState("ConteudoInicial");

    useEffect(() => {
        const checarTema = (e) => setTema(e.detail);
        window.addEventListener('temaAtualizado', checarTema);
        return () => window.removeEventListener('temaAtualizado', checarTema);
    }, []);

    const isClaro = tema === 'Claro';

    const conteudosBarraLateral = [
        { id: 1, descricao: "Alterar dados do perfil",         img: isClaro ? perfilModoEscuro : perfilModoClaro },
        { id: 2, descricao: "Sair da Conta",    img: isClaro ? sairContaModoEscuro : sairContaModoClaro },
    ];

    return (
        <>
            <div className={Style.separarConteudos}>
                    <div className={Style.barraLateral}>

                        <h1>Configurações de usuário</h1>
                        <hr />

                        <div className={Style.itensBarraLateral}>
                            {conteudosBarraLateral.map((item) => (
                                <ItemBarraLateral
                                    key={item.id}
                                    descricao={item.descricao}
                                    img={item.img}
                                />
                            ))}

                            <div className={Style.destaque}>
                                <ItemBarraLateral
                                    descricao="Desativar Conta"
                                    img={desativarConta}
                                />
                                <ItemBarraLateral
                                    descricao="Excluir Conta"
                                    img={excluirConta}
                                />
                            </div>
                        </div>

                        <h1>Privacidade e Segurança</h1>
                        <hr />

                            <ItemBarraLateral
                                descricao={"Sobre"}
                                img={isClaro? sobreModoEscuro : sobreModoClaro}
                            />
                            <ItemBarraLateral
                                descricao={"Termos de Serciço"}
                                img={isClaro? termosModoEscuro : termosModoClaro}
                            />
                    </div>

                    <div className={Style.Conteudos}>
                        
                        <h1>Dados do Perfil</h1>

                        <div className={Style.parteEmail}>
                            <div className={Style.campoForm}>
                                <label htmlFor="idEmailVinculado">E-mail vinculado</label>
                                <input
                                    type="text"
                                    placeholder='seugmail@gmail.com'
                                    id='idEmailVinculado'
                                />
                            </div>
                            <div className={Style.campoForm}>
                                <label htmlFor="idNovoEmail">Novo e-mail</label>
                                <input
                                    type="text"
                                    placeholder='seugmail@gmail.com'
                                    id='idNovoEmail'
                                />
                            </div>

                            <button className={Style.botoes}>Alterar</button>
                        </div>

                        <div className={Style.parteTelefone}>
                            <div className={Style.campoForm}>
                                <label htmlFor="idNumeroTel">Número de Telefone</label>
                                <input 
                                    type="text"
                                    placeholder='xx-xxxxx-xxxx'
                                    id='idNumeroTel' 
                                />
                            </div>
                            <div className={Style.campoForm}>
                                <label htmlFor="idConfirmeNumeroTel">Confirme o número de telefone</label>
                                <input 
                                    type="text" 
                                    placeholder='xx-xxxxx-xxxx'
                                    id='idConfirmeNumeroTel'
                                />
                            </div>

                            <button className={Style.botoes}>Adicionar</button>
                        </div>

                        <div className={Style.alterarSenha}>

                            <p>Alterar senha atual</p>
                            <Link
                                to="/recuperar-senha"
                            >
                                <button>Alterar</button>
                            </Link>

                        </div>
                        
                        <div className={Style.conectarContas}>

                            <h2>Conecte suas contas para login</h2>

                            <div className={Style.imagens}>
                                <img 
                                    src={googleIcon} 
                                    alt="google" 
                                />
                                <img 
                                    src={githubIcon} 
                                    alt="github" 
                                />
                            </div>
                        </div>

                    </div>
            </div>
        </>
    );
};

export { ConteudoConfiguracoes };