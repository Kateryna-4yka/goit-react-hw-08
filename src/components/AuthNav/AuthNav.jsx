import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

export default function AuthNav () {
    return <div className={css.div}>
    <NavLink className={css.nav} to='/register'>Registration</NavLink>
    <NavLink className={css.nav} to='/login'>Login</NavLink>
</div>
}