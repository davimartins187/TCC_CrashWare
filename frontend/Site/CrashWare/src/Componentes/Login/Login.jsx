import FLogin from '../../fotos/login_icon.svg'
import Style from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () =>
{
    return (
        <>
            <Link to='Login'>
                <div className={Style.Login}>
                    <img src={FLogin} alt="" />
                </div>
            </Link>    
        </>
    )
}

export {  Login }