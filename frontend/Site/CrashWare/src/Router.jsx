import { Routes, Route } from "react-router-dom"
import { PgInicial, PgCadastro, SobreNos, PgLogin } from "./Paginas"
import { LayoutPadrao, LayoutCadLogin } from "./Layouts"

const Router = () =>
{
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<PgInicial />}/>
                <Route path="sobre-nos" element={<SobreNos />}/>
                <Route path="cadastro" element={<PgCadastro />}/>
                <Route path="login" element={<PgLogin/>} />
            </Route>
        </Routes>
    )
}

export { Router }