import React from "react";
//import {Form, Field} from "react-final-form";
//import {Input} from "../../commonComponents/FormsControl/FormsControl";
import {required} from "../../utils/validate/validate";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
//import s from './../../commonComponents/FormsControl/FormsControl.module.css';
import {FORM_ERROR} from "final-form";
import {Formik, Field, Form} from "formik";
import {FormikInput} from "../../commonComponents/FormsControl/FormsControl";

/*let LoginForm = ({onSubmit, isAuth, errorMessage}) => {
    return <Form
        onSubmit={onSubmit}
        render = {({ submitError, handleSubmit, form, submiting, pristine, values}) =>  (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={"email"}
                           placeholder={"Login"}
                           component={Input}
                           validate={required}
                           type={"text"}/>
                </div>
                <div>
                    <Field name={"password"}
                           placeholder={"Password"}
                           component={Input}
                           validate={required}
                           type={"password"}/>
                </div>
                <div>
                    <Field name={"rememberMe"}
                           component={Input}
                           type={"checkbox"} />remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>{submitError}</div>
                <div className={s.formsControl + " " +(!isAuth && submitError ?  s.error : "")} >
                    <span>{submitError}</span>
                </div>
            </form>
        )}
    />
}*/


let LoginFormFormik = ({onSubmit, errorMessage}) => {
    return <div>
        <Formik
            initialValues={{
                password: '',
                email: '',
            }}
        onSubmit={onSubmit}
        >
            {({errors, touched, isValidating}) => (
                <Form>
                    <div className="">
                        <Field name={"email"}
                               placeholder={"Login"}
                               validate = {required}
                               component = {FormikInput}
                        />
                    </div>
                    <div>
                        <Field name={"password"}
                               placeholder={"Password"}
                               validate={required}
                               type={"password"}
                               component = {FormikInput}
                        />

                    </div>
                    <div>
                        <Field name={"rememberMe"}
                               type={"checkbox"} />remember me
                    </div>
                    {
                        errorMessage && <div>
                            {errorMessage}
                        </div>
                    }
                    <div className="">
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}


let Login = ({login, isAuth, errorMessage}) => {

    let onSubmit = (value) => {
        login(value.email, value.password, value.rememberMe);
    }

    if(isAuth)
        return <Redirect to="/profile"/>

    return <div>
        <h1>login</h1>
        <LoginFormFormik onSubmit = {onSubmit}
                    isAuth = {isAuth}
                    errorMessage = {errorMessage}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.error
});

export default connect(mapStateToProps, {login})(Login);