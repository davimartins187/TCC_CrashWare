import { Outlet, Link } from "react-router-dom"
import { useState } from "react"
import { Cabecalho } from "../../Componentes"

import perfilModoClaro from "../../fotos/claro/login_icon_claro.svg";
import perfilModoEscuro from "../../fotos/escuro/login_icon.svg";

import sairContaModoClaro from "../../fotos/claro/sairConta.svg";
import sairContaModoEscuro from "../../fotos/escuro/sairConta.svg";

import desativarConta from "../../fotos/desativarConta.svg";
import excluirConta from "../../fotos/excluirConta.svg";

import sobreModoClaro from "../../fotos/claro/Sobre.svg";
import sobreModoEscuro from "../../fotos/escuro/Sobre.svg";

import termosModoClaro from "../../fotos/claro/termos.svg";
import termosModoEscuro from "../../fotos/escuro/termos.svg";
import { CampoTexto } from '../../Componentes';
import { BotoesForm } from '../../Componentes';
import { Adm } from '../../../funcoes/adm';

//Pego o POPUP
import { PopUp } from "../../Componentes/pop-up";
import Style from "./LayoutADM.module.css"

const LalyoutADM = () => {
    const Links = [
        { label: "Usuários", to: "/usuario" },
        { label: "Conquistas", to: "/conquistas" },
        { label: "Notificações", to: "/*" },
        { label: "Relatórios", to: "/*" },
        { label: "Cosméticos", to: "/*" }
    ];

    const conteudosBarraLateral = [
        { id: 1, descricao: "Usuários", acao: null, to: "/usuario" },
        { id: 2, descricao: "Conteudos", acao: 'sair' },
        { id: 3, descricao: "Conquistas", acao: 'conquistas' },
        { id: 4, descricao: "Relatórios", acao: 'relatorios' },
        { id: 5, descricao: "Notificações", acao: 'notificacoes' },
        { id: 6, descricao: "Matérias", acao: 'cosmeticos' },
    ];

    const ItemBarraLateral = ({ descricao, img, onClick }) => {
        return (
            <div className={Style.itemBarraLateral} onClick={onClick}>
                <span>{descricao}</span>
            </div>
        );
    };

    const [abrirConquistas, setAbrirConquistas] = useState(false);

    return (
        <>
            <Cabecalho />

            <div className={Style.separarConteudos}>

                <div className={Style.barraLateral}>
                    <h1>Gerenciamento</h1>
                    <hr />

                    <div className={Style.itensBarraLateral}>
                        {conteudosBarraLateral.map((item) => (
                            <div key={item.id}>
                                <ItemBarraLateral
                                    descricao={item.descricao}
                                    onClick={() => {
                                        if (item.descricao === "Conquistas") {
                                            setAbrirConquistas(!abrirConquistas);
                                        } else if (item.acao) {
                                            setPopupAtivo(item.acao);
                                        }
                                    }}
                                />

                                {item.descricao === "Conquistas" && abrirConquistas && (<div className={Style.sanfona}>

                                    <Link to="ppppp">
                                        Criar Conquista
                                    </Link>

                                    <Link to="asdasdadada">
                                        Lista de Conquistas
                                    </Link>

                                    <Link to="asdadasdasd">
                                        Recompensas
                                    </Link>

                                </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Outlet />

            </div>

        </>
    )
}

export { LalyoutADM }