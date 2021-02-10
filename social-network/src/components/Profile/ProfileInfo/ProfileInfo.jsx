import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../commonComponents/Preloder/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";

function ProfileInfo(props) {


    let [editMode, setEditMode] = useState(false);

    let onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }

    let onSubmit = (value) => {
        props.updateProfile(value);
        setEditMode(false);
    }

    if (!props.profile)
        return <Preloader/>
    else
        return <div className="">

            <div className>
                <div>
                    {
                        props.profile.photos.large
                            ? <img src={props.profile.photos.large} alt="ava" className={style.userPhoto}/>
                            : <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="ava"
                                   className={style.userPhotoDefault}/>

                    }
                    <div className="">
                        <input type='file' onChange={onChangePhoto}/>
                    </div>

                </div>
                {
                    editMode && <ProfileInfoForm profile={props.profile}
                                                 onSubmit={onSubmit}/>
                }
                {
                    !editMode && <div>
                        <button onClick={() => {
                            setEditMode(true)
                        }}>Edit
                        </button>
                        <div>
                            <h2>
                                <div className="name">{props.profile.fullName}</div>
                            </h2>
                        </div>
                        <div>
                            <b>About me: </b>{props.profile.aboutMe}
                        </div>
                        <div className="">
                            <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
                        </div>
                        <div className="">
                            <b>Job description:</b> {props.profile.lookingForAJobDescription}
                        </div>
                        <div className="">
                            <b>Contacts</b>
                            <div className={style.contacts}>
                                {
                                    Object.keys(props.profile.contacts).map(key => {
                                        return <Contact contact={key}
                                                        contactValue={props.profile.contacts[key]}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }

            </div>

            <ProfileStatusWithHooks status={props.status}
                                    updateStatus={props.updateStatus}/>




        </div>
}

let Contact = ({contact, contactValue}) => {
    return <div>
        <b>{contact}: </b> {contactValue && contactValue};
    </div>
}


export default ProfileInfo;


//todo - fix allowing changing only in own page
//      - show btn edit only for your acc

