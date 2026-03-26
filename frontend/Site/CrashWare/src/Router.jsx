import { Routes, Route } from "react-router-dom"
import { PgInicial, PgCadastro, SobreNos } from "./Paginas"
import { LayoutPadrao } from "./Layouts"

const Router = () =>
{
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<PgInicial />}/>
                <Route path="sobre-nos" element={<SobreNos />}/>
                <Route path="cadastro" element={<PgCadastro />}/>
            </Route>

        </Routes>
    )
}

export { Router }