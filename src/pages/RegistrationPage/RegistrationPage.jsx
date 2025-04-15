
import { Formik,Form, Field, ErrorMessage } from "formik";
import { useId } from 'react';
import css from './RegistrationPage.module.css';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from 'yup';

const userSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(10, "Name must be no more than 10 characters")
      .required("Name is required"),
  
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  
const initialValues={
    name: '',
    email: '',
    password: '',
}

export default function RegistrationPage () {

    const dispatch = useDispatch();
    const name = useId();
    const email = useId();
    const pasw = useId(); 
    
    function handleSubmit (value, actions) {
        dispatch(register(value));
        actions.resetForm();
    }
    
    return <div className={css.div}>
    <h3>Join now to unlock all features</h3>
    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema = {userSchema}
    >
    <Form className={css.form}>

    <label className={css.label} htmlFor={name}>Name</label>
    <Field className={css.input} name='name' id={name} type='text' />
    <ErrorMessage className={css.error} name="name" component='p' />

    <label className={css.label} htmlFor={email}>Email</label>
    <Field className={css.input} name='email' id={email} type='text' />
    <ErrorMessage className={css.error} name="email" component='p' />
    
    <label className={css.label} htmlFor={pasw}>Password</label>
    <Field className={css.input} name='password' id={pasw} type='password' />
    <ErrorMessage className={css.error} name="password" component='p' />
    
    <button className={css.btn} type="submit">Register</button>
    
    </Form>
    </Formik>
    </div>   
}