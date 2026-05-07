import { useState } from "react"
import { CampoTexto } from '../../../../CampoTexto';
import { BotoesForm } from '../../../../Botoes';
import Style from "./AbaConquistas.module.css"

const AbaConquistas = () => {

    const [nomeConquista, setNomeConquista] = useState("");
    const [descricaoConquista, setDescricaoConquista] = useState("");
    const [moedas, setMoedas] = useState();
    const [xp, setXP] = useState();
    const [condicao, setCondicao] = useState("");
    const [opcao, setOpcao] = useState("");
    const [popup, setPopup] = useState(null);

    const botaoliberado =
        nomeConquista &&
        descricaoConquista &&
        moedas &&
        xp &&
        condicao &&
        opcao;

    const handleAdicionarConquista = () => {
        //Instâncio o objeto
        const conquista = new Adm;

        //Chamo o método
        conquista.adicionar_conquista(nomeConquista, opcao, descricaoConquista, moedas, xp, condicao);

    }

    return (

        <div className={Style.Conteudos}>
            <div className={Style.parteEmail}>
                <div className={Style.campoForm}>

                    <label htmlFor="NomeConsquista">Nome da Conquista</label>
                    <CampoTexto
                        placeholder="Nome da Conquista"
                        maxlenght={100}
                        onChange={(e) => setNomeConquista(e.target.value)}
                    />
                </div>
                <div className={Style.campoForm}>
                    <label>
                        <CampoTexto name="opcao" value="Software" type="radio" className={Style.radio}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Software
                    </label>

                    <label>
                        <CampoTexto name="opcao" value="Hardware" type="radio" className={Style.radio}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Hardware
                    </label>
                    <label>
                        <CampoTexto name="opcao" value="Outro" type="radio" className={Style.radio}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Outro
                    </label>
                </div>
            </div>
            <div className={Style.parteTelefone}>
                <label htmlFor="Descricao">Descricao</label>
                <CampoTexto
                    placeholder="Descreva a Conquista"
                    maxlenght={200}
                    onChange={(e) => setDescricaoConquista(e.target.value)}
                />
            </div>
            <div className={Style.parteTelefone}>
                <label htmlFor="Moedas">Quantas moedas vai ter?</label>
                <CampoTexto placeholder="00"
                    type="number"
                    maxlength={100}
                    onChange={(e) => setMoedas(e.target.value)}
                />
                <label htmlFor="XP">vale quanto de XP</label>
                <CampoTexto placeholder="00"
                    type="number"
                    maxlenght={100}
                    onChange={(e) => setXP(e.target.value)}
                />
            </div>
            <div className={Style.parteTelefone}>
                <label htmlFor="Condicao">Condição da Conquista</label>
                <CampoTexto placeholder="Condição"
                    type="text"
                    maxlenght={100}
                    onChange={(e) => setCondicao(e.target.value)}
                />
            </div>

            <BotoesForm
                texto="Adicionar"
                disabled={!botaoliberado}
                onClick={handleAdicionarConquista}
            />
        </div>
    )
}

export { AbaConquistas }