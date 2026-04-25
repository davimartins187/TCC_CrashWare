import Style from "./ConteudoPrivacidade.module.css";
import { useState } from 'react';

const ConteudoPrivacidade = () => {
    const [cookies, setCookies] = useState(true);
    const [historico, setHistorico] = useState(true);

    return (
        <div className={Style.main}>
            <h1>Privacidade</h1>

            <div className={Style.secao}>
                <h2>Dados e Cookies</h2>

                <div className={Style.item}>
                    <div className={Style.itemTexto}>
                        <p><strong>Aceitar cookies</strong></p>
                        <span>Permite salvar preferências do site</span>
                    </div>
                    <label className={Style.toggle}>
                        <input
                            type="checkbox"
                            checked={cookies}
                            onChange={() => setCookies(!cookies)}
                        />
                        <span className={Style.slider}></span>
                    </label>
                </div>

                <div className={Style.item}>
                    <div className={Style.itemTexto}>
                        <p><strong>Histórico de atividades</strong></p>
                        <span>Salvar suas atividades na plataforma</span>
                    </div>
                    <label className={Style.toggle}>
                        <input
                            type="checkbox"
                            checked={historico}
                            onChange={() => setHistorico(!historico)}
                        />
                        <span className={Style.slider}></span>
                    </label>
                </div>
            </div>

        </div>
    );
};

export { ConteudoPrivacidade };