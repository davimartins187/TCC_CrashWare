import style from './Carrossel.module.css'
import { useState } from 'react';
const Carrossel = () => {

    const CadsCarrossel = [
        { id: 1, Titulo: "Gameficação", Texto: "Mantenha sua ofensiva, desbloqueie conquistas e troque seus pontos por cosméticos exclusivos." },
        { id: 2, Titulo: "Aprendizagem Continua", Texto: "Metas Diarias,  Ofensiva e XP" },
        { id: 3, Titulo: "Aulas e Exercicios", Texto: "Consisos" },
    ];
    const [index, setIndex] = useState(0);

    // const CarrosselFuncao = () => {
    // }
    const proximo = () => {
        setIndex((prev) =>
            prev === CadsCarrossel.length - 1 ? 0 : prev + 1
        );
    };

    const anterior = () => {
        setIndex((prev) =>
            prev === 0 ? CadsCarrossel.length - 1 : prev - 1
        );
    };
    return (
        <div className={style.container}>
            <button onClick={anterior}>◀</button>

            <div className={style.viewport}>
                <div
                    className={style.lista}
                    style={{ transform: `translateX(-${index * 240}px)` }}
                >
                    {CadsCarrossel.map((CadsCarrosel) => (
                        <div
                            key={CadsCarrosel.id}
                            className={style.card}
                        // style={{ background: card.cor }}
                        >
                            <h3>{CadsCarrosel.Titulo}</h3>
                            <p>{CadsCarrosel.Texto}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={proximo}>▶</button>
        </div>
    )
}

export { Carrossel }