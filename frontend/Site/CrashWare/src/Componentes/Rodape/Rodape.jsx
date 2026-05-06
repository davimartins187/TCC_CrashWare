import Logo from '../../Logo/logo_sem_fundo.png';
import Instagram from "../../fotos/Instagram.svg"
import Whatsapp from "../../fotos/Whatsapp.svg"
import GitHub from "../../fotos/GitHub.svg"
import { Link } from 'react-router-dom';

import Style from './Rodape.module.css';

const Rodape = ({ children }) => {

    return (
        <div>
        { children }
        </div>
        );
};

export { Rodape };