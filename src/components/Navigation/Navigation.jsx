import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";


export default function Navigation () {



    return <>
    <div className={css.div} >
    <NavLink className={css.nav} to='/'>Home</NavLink>
    <NavLink className={css.nav} to='/register'>RegistrationPage</NavLink>
    <NavLink className={css.nav} to='/login'>LoginPage</NavLink>
    <NavLink className={css.nav} to='contacts'>ContactsPage</NavLink>
    </div>





    </>
    }