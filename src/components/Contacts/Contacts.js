import {Input, Textarea,} from "../../common/form-controls/FormsControl";
import {emailValidator, required} from "../../common/validator/validator";
import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm, reset} from "redux-form";
import * as axios from "axios";
import {connect} from "react-redux";
import BlockTitle from "../BlockTitle";
import {particleOpt} from "../../App";
import Particles from "react-particles-js";

const ContactsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.contactsForm}>
            <Field component={Input} name={'name'} placeholder='Your name'
                   validate={[required]} className={styles.inputForm}/>
            <Field className={styles.inputForm} component={Input} name={'email'} placeholder='E-mail'
                   validate={[required, emailValidator]}/>
            <Field className={styles.textareaForm} component={Textarea} name={'message'} placeholder='Enter your message'
                   validate={[required]}/>
            <button className='button'>SEND MESSAGE</button>
        </form>
    )
}
const ContactsReduxForm = reduxForm({
    form: 'contacts'
})(ContactsForm)


const Contacts = (props) => {

    const sendForm = (formData) => {
        axios.post('https://smtp-nodeja-server.herokuapp.com/send', formData)
        props.clearForm()
    }
    return (
        <div className={styles.contacts} id={'contacts'}>
            <Particles className='particles' params={particleOpt}/>
            <div className={styles.contactsTitle}>
                <BlockTitle title='Contact with me'/>
            </div>
            <div className={styles.container}>
                <ContactsReduxForm onSubmit={sendForm}/>
            </div>
        </div>
    )
}

let mdtp = (dispatch) => {
    return {
        clearForm: () => {
            dispatch(reset('contacts'))
        }
    }
}


export default connect(null, mdtp)(Contacts);