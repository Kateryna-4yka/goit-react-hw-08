import { Formik,Form, Field, ErrorMessage } from "formik";
import { useId } from 'react';
import css from './LoginPage.module.css';

const initialValues={
    email: '',
    password: '',
}

export default function LoginPage () {

const email = useId();
const pasw = useId(); 

function handleSubmit (value, actions) {
    console.dir(value);
    actions.resetForm();
}

return <>

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
</>}