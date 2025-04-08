import { nanoid } from 'nanoid';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { IoIosPaw } from "react-icons/io";
import { BiPhoneIncoming } from "react-icons/bi";
import { BiSolidCat } from "react-icons/bi";
import {useId} from 'react';
import css from './ContactForm.module.css';
import { useDispatch} from 'react-redux';
import {addContact} from '../../redux/contacts/operations';

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only letters are allowed") 
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed") 
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

export default function ContactForm () {
const idForEl = useId();
const dispatch = useDispatch();
const handleSubmit = (values, actions) => {
    dispatch (addContact(values));
    actions.resetForm();};

return <Formik 
initialValues={{
    name: '',
    number: ''}}
onSubmit={handleSubmit}
validationSchema={ContactFormSchema}>

<Form className={css.form}>
<div className={css.div}>
    <label className={css.label} htmlFor={`name-${idForEl}`}><BiSolidCat className={css.icon}/> Name</label>
    <Field className={css.input} id={`name-${idForEl}`} name='name' type='text' />
    <ErrorMessage  className={css.err}  name="name" component="span" />
</div>
<div className={css.div}>
    <label className={css.label} htmlFor={`number-${idForEl}`}><BiPhoneIncoming className={css.icon}/> Number</label>
    <Field className={css.input} id={`number-${idForEl}`} name='number'  type='tel' />
    <ErrorMessage  className={css.err} name="number" component="span" />
</div>
<button className={css.button} type='submit'><IoIosPaw className={css.icon}/> Add contact</button> 
</Form>
</Formik>
}