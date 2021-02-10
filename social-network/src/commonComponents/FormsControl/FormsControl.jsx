import React from "react";
import s from './FormsControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <textarea  {...input} {...props} rows="10"></textarea>
        </div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <span>{hasError && meta.error}</span>
        </div>
    </div>
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <input  {...input} {...props} rows="10"></input>
        </div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <span>{hasError && meta.error}</span>
        </div>
    </div>
}

export const FormikInput = ({field, form: {touched, errors}, ...props}) => {
    const hasError = touched[field.name] && errors[field.name];
    return <div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <input  {...field} {...props} rows="10"></input>
        </div>
        <div className={s.formsControl + " " + (hasError ? s.error : "")}>
            <span>{hasError && errors[field.name]}</span>
        </div>
    </div>
}
