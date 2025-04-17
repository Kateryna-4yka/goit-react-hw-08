import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";




export function RestrictedRoute ({component, redirect}) {
const isLoggedIn = useSelector (selectIsLoggedIn);
return isLoggedIn ? <Navigate  to={redirect}/> : component;
}


export function PrivatePages ({component, redirect}) {
    const isLoggedIn = useSelector (selectIsLoggedIn);
    return isLoggedIn ? component : <Navigate  to={redirect}/>;
    }
