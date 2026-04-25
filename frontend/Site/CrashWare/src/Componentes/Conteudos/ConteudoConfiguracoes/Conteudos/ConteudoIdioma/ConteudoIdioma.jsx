import Style from "./ConteudoIdioma.module.css";
import { useState } from 'react';

const ConteudoIdioma = () => {
    const [idioma, setIdioma] = useState("pt-BR");
    const [formato, setFormato] = useState("DD/MM/AAAA");

    const idiomas = [
        { id: "pt-BR", label: "Português (Brasil)" },
        { id: "en-US", label: "English (US)"       },
        { id: "es-ES", label: "Español"             },
    ];

    const formatos = ["DD/MM/AAAA", "MM/DD/AAAA", "AAAA/MM/DD"];

    return (
        <div className={Style.main}>
            <h1>Idioma</h1>

            <div className={Style.secao}>
                <h2>Idioma do Sistema</h2>
                {idiomas.map((op) => (
                    <div
                        key={op.id}
                        className={`${Style.item} ${idioma === op.id ? Style.ativo : ''}`}
                        onClick={() => setIdioma(op.id)}
                    >
                        <p>{op.label}</p>
                        {idioma === op.id && <span className={Style.check}>✓</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ConteudoIdioma };