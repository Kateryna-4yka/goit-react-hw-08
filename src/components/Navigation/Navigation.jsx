import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function Navigation () {

const isLoggedId = useSelector(selectIsLoggedIn);

    return <>
    <div className={css.div} >

    <NavLink className={css.nav} to='/'>Home</NavLink>

{isLoggedId && <><NavLink className={css.nav} to='tasks'>Task Manager</NavLink>
    <NavLink className={css.nav} to='contacts'>Contacts Book</NavLink>
    <NavLink className={css.nav} to='diary'>Personal Diary</NavLink>
    <NavLink className={css.nav} to='img'>Image Search</NavLink>
    <NavLink className={css.nav} to='move'>Movie Search</NavLink> </>
}








    </div>
    </>
    }