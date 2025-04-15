import { Formik,Form, Field, ErrorMessage } from "formik";
import { useId } from 'react';
import css from './LoginPage.module.css';
import { useDispatch } from "react-redux";
import { logIN } from "../../redux/auth/operations";

const initialValues={
    email: '',
    password: '',
}

export default function LoginPage () {

const email = useId();
const pasw = useId(); 
const dispatch =useDispatch(); 
function handleSubmit (value, actions) {
    dispatch(logIN(value));
    actions.resetForm();
}

return <div className={css.div}>
<div className={css.centerDiv}>
<h3>Log in to access the full app</h3>
<Formik 
initialValues={initialValues}
onSubmit={handleSubmit}
>
<Form className={css.form}>
<label className={css.label} htmlFor={email}>Email</label>
<Field className={css.input} name='email' id={email} type='text' />
<ErrorMessage className={css.error} name="email" component='span' />

<label className={css.label} htmlFor={pasw}>Password</label>
<Field className={css.input} name='password' id={pasw} type='text' />
<ErrorMessage className={css.error} name="password" component='span' />

<button  className={css.btn} type="submit">Log in</button>

</Form>
</Formik>
</div>

 </div>}