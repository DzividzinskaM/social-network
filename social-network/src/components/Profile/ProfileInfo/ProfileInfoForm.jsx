import React from "react";
import {Field, Form, Formik} from "formik";
import {required} from "../../../utils/validate/validate";
import {FormikInput} from "../../../commonComponents/FormsControl/FormsControl";

let ProfileInfoForm = ({profile, onSubmit}) => {
    return <div>
        <Formik
            initialValues={profile}
            onSubmit={onSubmit}>
            {({}) => (
                <Form>
                    <button type={"submit"}>Save</button>
                    <div> <b>Full name</b>
                        <Field name={"fullName"}
                               placeholder={"Enter full name"}
                               validate = {required}
                               component = {FormikInput}
                        />
                    </div>
                    <div> <b>About me</b>
                        <Field name={"aboutMe"}
                               placeholder={"Enter smth about you"}
                               component = {FormikInput}
                        />
                    </div>
                    <div> <b>Looking for a job? </b>
                        <Field name={"lookingForAJob"}
                               type = "checkbox"
                               component = {FormikInput}
                        />
                    </div>
                    <div> <b>Looking for a job description</b>
                        <Field name={"lookingForAJobDescription"}
                               placeholder = "Job description"
                               component = {FormikInput}
                        />
                    </div>
                    <div> Contacts
                        {Object.keys(profile.contacts).map(key => {
                            return <ContactField contact={key}/>
                        })}
                    </div>
                </Form>
            )}

        </Formik>
    </div>
}

let ContactField = ({contact}) => {
    return <div>
        <b>{contact}</b>
        <Field  name={contact}
                placeholder = {contact}
                component = {FormikInput}/>
    </div>
}

export default ProfileInfoForm;